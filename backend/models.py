from pydantic import BaseModel, Field
from typing import List, Optional

class Ingredient(BaseModel):
    name: str
    amount: str
    notes: Optional[str] = None

class InstructionStep(BaseModel):
    step_number: int
    title: str
    description: str
    image_url: Optional[str] = None
    tip: Optional[str] = None

class NutritionInfo(BaseModel):
    calories: str
    protein: str
    carbs: str
    fat: str

class Recipe(BaseModel):
    id: str
    title_bn: str
    title_en: str
    category_id: str
    category_name_bn: str
    vector_icon: Optional[str] = "🍲"
    image_url: Optional[str] = None
    hero_image: Optional[str] = None
    rating: float = 4.8
    review_count: int = 120
    prep_time_minutes: int
    cook_time_minutes: int
    total_time_minutes: int
    servings_default: int = 4
    difficulty: str  # সহজ, মাঝারি, কঠিন
    is_trending: bool = False
    is_featured: bool = False
    short_description: str
    ingredients: List[Ingredient]
    instructions: List[InstructionStep]
    nutrition: NutritionInfo
    chef_tips: List[str]
    tags: List[str]

class Category(BaseModel):
    id: str
    name_bn: str
    name_en: str
    icon: str
    bg_color: str
    image_url: str
    recipe_count: int

class RecipeListResponse(BaseModel):
    total: int
    page: int
    limit: int
    categories: List[Category]
    recipes: List[Recipe]
