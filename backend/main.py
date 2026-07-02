from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from typing import Optional, List
import os
import sys

# Ensure backend directory is in python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from models import Recipe, Category, RecipeListResponse
from data import CATEGORIES, ALL_RECIPES

app = FastAPI(
    title="Multi-Cuisine Bengali Recipe Hub API",
    description="Scalable RESTful API providing 200+ authentic Bengali and global recipes.",
    version="1.0.0"
)

# Enable CORS for future Mobile Apps (Flutter, React Native, etc.)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/v1/health")
def health_check():
    return {"status": "ok", "total_recipes": len(ALL_RECIPES), "message": "Bengali Recipe API Server is running!"}

@app.get("/api/v1/categories", response_model=List[Category])
def get_categories():
    """Fetch all cuisine categories with updated recipe counts."""
    categories_with_count = []
    for cat in CATEGORIES:
        count = len([r for r in ALL_RECIPES if r["category_id"] == cat["id"]])
        cat_copy = dict(cat)
        cat_copy["recipe_count"] = count
        categories_with_count.append(cat_copy)
    return categories_with_count

@app.get("/api/v1/recipes", response_model=RecipeListResponse)
def get_recipes(
    category: Optional[str] = Query(None, description="Filter by Category ID"),
    search: Optional[str] = Query(None, description="Search term for dish name or ingredients"),
    difficulty: Optional[str] = Query(None, description="Filter by difficulty: সহজ, মাঝারি, কঠিন"),
    max_time: Optional[int] = Query(None, description="Maximum total cooking time in minutes"),
    is_trending: Optional[bool] = Query(None, description="Filter trending dishes"),
    is_featured: Optional[bool] = Query(None, description="Filter featured dishes"),
    sort: Optional[str] = Query("popular", description="Sort by: popular, rating, time_asc, time_desc"),
    page: int = Query(1, ge=1),
    limit: int = Query(250, ge=1, le=250)
):
    """Filter, search, and paginate 200+ Bengali recipes."""
    filtered = ALL_RECIPES

    # Category Filter
    if category and category != "all":
        filtered = [r for r in filtered if r["category_id"] == category]

    # Search Filter (Dish Name or Ingredients)
    if search:
        search_lower = search.lower().strip()
        filtered = [
            r for r in filtered
            if search_lower in r["title_bn"].lower()
            or search_lower in r["title_en"].lower()
            or search_lower in r["short_description"].lower()
            or any(search_lower in ing["name"].lower() for ing in r["ingredients"])
            or any(search_lower in tag.lower() for tag in r["tags"])
        ]

    # Difficulty Filter
    if difficulty:
        filtered = [r for r in filtered if r["difficulty"] == difficulty]

    # Max Cooking Time Filter
    if max_time:
        filtered = [r for r in filtered if r["total_time_minutes"] <= max_time]

    # Trending & Featured Filters
    if is_trending:
        filtered = [r for r in filtered if r.get("is_trending")]

    if is_featured:
        filtered = [r for r in filtered if r.get("is_featured")]

    # Sorting
    if sort == "rating":
        filtered = sorted(filtered, key=lambda x: x["rating"], reverse=True)
    elif sort == "time_asc":
        filtered = sorted(filtered, key=lambda x: x["total_time_minutes"])
    elif sort == "time_desc":
        filtered = sorted(filtered, key=lambda x: x["total_time_minutes"], reverse=True)
    else:  # popular (default)
        filtered = sorted(filtered, key=lambda x: (x["review_count"] * x["rating"]), reverse=True)

    total = len(filtered)
    start = (page - 1) * limit
    end = start + limit
    paginated_recipes = filtered[start:end]

    return {
        "total": total,
        "page": page,
        "limit": limit,
        "categories": CATEGORIES,
        "recipes": paginated_recipes
    }

@app.get("/api/v1/recipes/trending", response_model=List[Recipe])
def get_trending_recipes():
    """Fetch top trending Bengali and international dishes."""
    trending = [r for r in ALL_RECIPES if r.get("is_trending") or r.get("rating", 0) >= 4.8]
    return trending[:8]

@app.get("/api/v1/recipes/{recipe_id}", response_model=Recipe)
def get_recipe_detail(recipe_id: str):
    """Fetch single recipe detailed guide with A to Z step-by-step instructions."""
    for r in ALL_RECIPES:
        if r["id"] == recipe_id:
            return r
    raise HTTPException(status_code=404, detail="রেসিপি পাওয়া যায়নি (Recipe Not Found)")

# Path to static frontend directory
frontend_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "frontend")

# Mount StaticFiles at root AFTER API routes
if os.path.exists(frontend_dir):
    app.mount("/", StaticFiles(directory=frontend_dir, html=True), name="static_root")
