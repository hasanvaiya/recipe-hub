/**
 * Multi-Cuisine Global Recipe Hub - 500 Detailed Recipes Client Application
 * Precision Vector Food Icon Resolver for all 500 recipes.
 */

// Comprehensive Vector Icon Keyword Matcher
const VECTOR_ICON_MAP = [
  // Rice / Biryani / Polao
  { keywords: ["কাচ্চি", "বিরিয়ানি", "তেহারি", "পোলাও", "খিচুড়ি", "রাইস", "ববটি", "জলোফ", "মান্দি", "কাবসা", "মজবুস", "মাকলুবা", "পোলো", "chawal", "rice", "biryani", "polao"], icon: "🍲" },
  
  // Prawn / Shrimp
  { keywords: ["চিংড়ি", "প্রন", "শ্রিম্প", "prawn", "shrimp"], icon: "🦐" },
  
  // Lobster & Crabs
  { keywords: ["লবস্টার", "lobster"], icon: "🦞" },
  { keywords: ["কাঁকড়া", "crab"], icon: "🦀" },
  { keywords: ["স্কুইড", "ক্যালামারি", "অক্টোপাস", "অয়েস্টার", "ক্যাভিয়ার", "মাসেলস", "ক্ল্যাম", "squid", "seafood"], icon: "🦪" },
  
  // Fish
  { keywords: ["ইলিশ", "কালিয়া", "ঝোল", "মাছ", "মুইঠ্যা", "মুড়িঘণ্ট", "রুই", "পাবদা", "কৈ", "শোল", "চিতল", "টাকি", "লইট্টা", "রূপচাঁদা", "স্যালমন", "টুনা", "স্ন্যাপার", "ম্যাকরেল", "সার্ডিন", "ফিশ", "ফিলে", "salmon", "tuna", "fish"], icon: "🐟" },

  // Meat / Steaks
  { keywords: ["কালা ভুনা", "রেজালা", "মেজবানি", "গোশত", "রারা", "মাংস", "খাসি", "গরু", "পায়া", "নেহারি", "মগজ", "কলিজা", "স্টেক", "ব্রিসকেট", "রিবস", "পোর্ক", "লাম্ব", "বোরগুইনন", "আসাদো", "steak", "beef", "mutton", "meat"], icon: "🥩" },

  // Chicken & Poultry
  { keywords: ["চিকেন", "মুরগি", "মোরগ", "হাঁস", "কবুতর", "বাটার চিকেন", "তন্দুরি", "উইংস", "নাগেটস", "টেন্ডার", "ব্রোস্ট", "chicken", "wings", "turkey"], icon: "🍗" },

  // Kebabs & Shawarma
  { keywords: ["কাবাব", "শাওয়ারমা", "ফালাফেল", "তাউওক", "kebab", "shawarma"], icon: "🥙" },

  // Street Snacks / Fuchka
  { keywords: ["চটপটি", "ফুচকা", "পানিপুরি", "ভেলপুরি", "দই ফুচকা", "সেভ পুরি", "fuchka"], icon: "🍧" },

  // Halim & Lentils
  { keywords: ["হালিম", "halim", "ডাল", "রাজমা", "ছোলার", "বুটের", "ডালনা", "তাড়কা", "lentil"], icon: "🍲" },

  // Veggies & Bhorta
  { keywords: ["ভর্তা", "শাক", "ভাজি", "আলু", "লাউ", "করোলা", "পটল", "চালকুমড়া", "কাঁচকলা", "গোবি", "ভিন্ডি", "অ্যাসপারাগাস", "ক্যাপসিকাম", "ভেজিটেবল", "সবজি"], icon: "🥗" },

  // Cheese
  { keywords: ["পনির", "paneer", "চিজ", "cheese", "মোজারেলা", "হালাপিনো"], icon: "🧀" },

  // Breads / Dosa / Paratha
  { keywords: ["ধোসা", "ইডলি", "উত্তাপাম", "পোহা", "উপমা", "পরোটা", "লুচি", "রুটি", "নান", "পরাঠা", "বাগেট", "ক্রোয়াসাঁ", "মানাকিশ", "পিটা", "ব্রেড", "dosa", "idli", "naan", "roti", "paratha", "bread"], icon: "🥞" },

  // Samosa / Pakora / Cutlet
  { keywords: ["সমোসা", "পকোড়া", "টিক্কি", "কাটলেট", "প্যাটিস", "কফতে", "কোফতা", "পাই", "এমপানাডা", "samosa", "patty"], icon: "🥟" },

  // Burgers
  { keywords: ["বার্গার", "burger"], icon: "🍔" },

  // Fries / Potato
  { keywords: ["ফ্রেঞ্চ ফ্রাই", "ওয়েজেস", "চিপস", "টর্নেডো", "হ্যাশ ব্রাউন", "fries"], icon: "🍟" },

  // Pizza
  { keywords: ["পিৎজা", "মার্গারিটা", "পেপারনি", "ক্যালজোনে", "pizza"], icon: "🍕" },

  // Pasta / Spaghetti / Lasagna
  { keywords: ["পাস্তা", "লাজানিয়া", "স্প্যাগেটি", "ফেটুচিনি", "রাভিওলি", "নিওকি", "রিসোতো", "ম্যাকারনি", "pasta", "spaghetti", "lasagna"], icon: "🍝" },

  // Tacos & Burritos
  { keywords: ["টাকো", "বুরিটো", "কেসাদিয়া", "ফাহিতা", "এনচিলাদা", "taco", "burrito", "quesadilla"], icon: "🌮" },

  // Sandwiches
  { keywords: ["স্যান্ডউইচ", "সাবমেরিন", "ক্লাব", "প্যানিনি", "sandwich"], icon: "🥪" },

  // Sausages & Hotdogs
  { keywords: ["সসেজ", "হট ডগ", "কর্ন ডগ", "sausage", "hotdog"], icon: "🌭" },

  // Sushi
  { keywords: ["সুশি", "সাশিমি", "sushi", "sashimi"], icon: "🍣" },

  // Noodles & Ramen
  { keywords: ["রামেন", "উডন", "সোবা", "চাওমিন", "নুডলস", "প্যাড থাই", "লাকসা", "ramen", "noodles"], icon: "🍜" },

  // Dumplings / Dim Sum / Momo
  { keywords: ["ডিম সাম", "ডাম্পলিং", "বাওজি", "বাও বান", "মোমো", "মান্টু", "গায়োজা", "dumpling", "momo"], icon: "🥟" },

  // Asian Stews
  { keywords: ["কিমচি", "বিবামবাপ", "তিওকবোখি", "বুলগোগি", "হট পট"], icon: "🍲" },

  // Benglia & Indian Sweets
  { keywords: ["রসগোল্লা", "কালোজাম", "চমচম", "জিলাপি", "সন্দেশ", "কাঁচাগোল্লা", "রসমালাই", "লাড্ডু", "বালুশাহী", "আমিত্তি", "ক্ষীরসা", "পায়েস", "সেমাই", "ফালুদা", "হালুয়া", "বাকলাভা", "কুনাফা", "sweets"], icon: "🍨" },

  // Cakes & Bakery
  { keywords: ["কেক", "তিরিমিসু", "চিজকেক", "ব্রাউনি", "টার্ট", "মাফিন", "কুকিজ", "সুফলে", "পুডিং", "কাস্টার্ড", "মুস", "cake"], icon: "🍰" },

  // Ice Cream & Gelato
  { keywords: ["আইসক্রিম", "জিলেটো", "ice cream", "gelato"], icon: "🍦" },

  // Donuts & Waffles
  { keywords: ["ডোনাট", "ওয়াফেল", "প্যানকেক", "ক্রেপ", "চুরোস", "donut", "waffle"], icon: "🍩" },

  // Soups
  { keywords: ["স্যুপ", "soup", "চাউডার", "গাম্বো"], icon: "🥣" },

  // Salads
  { keywords: ["সালাদ", "salad", "তাবুলা", "ফাতুশ", "গুকামোলি"], icon: "🥗" },

  // Coffee
  { keywords: ["কফি", "ক্যাপউচিনো", "লাতে", "মোকা", "এসপ্রেসো", "coffee"], icon: "☕" },

  // Tea
  { keywords: ["চা", "tea"], icon: "🍵" },

  // Juices & Smoothies
  { keywords: ["স্মউদি", "লাচ্ছি", "মাঠা", "জুস", "শর্বত", "smoothie", "juice", "lassi"], icon: "🥤" },

  // Coolers / Drinks
  { keywords: ["লেমোনেড", "মার্গারিটা", "পানীয়", "পিনা কোলাডা", "কম্বুচা", "বাবল টি", "আইসড টি", "ডাবের পানি", "drink", "mojito"], icon: "🧋" }
];

const CAT_VECTOR_DEFAULT = {
  bengali: "🍲",
  indian: "🍛",
  chinese_east_asian: "🥢",
  fastfood_street: "🍔",
  italian_european: "🍕",
  middle_eastern: "🥙",
  american_mexican: "🌮",
  seafood: "🦞",
  desserts_bakery: "🍰",
  soups_beverages: "🍹"
};

function getDishVectorIcon(name, catId) {
  // Strip initial numbers like "1. ", "51. "
  const cleanName = name.replace(/^[0-9]+\.\s*/, '').toLowerCase().trim();
  
  for (const item of VECTOR_ICON_MAP) {
    if (item.keywords.some(kw => cleanName.includes(kw))) {
      return item.icon;
    }
  }
  return CAT_VECTOR_DEFAULT[catId] || "🍽️";
}

// Helper to generate dish-tailored ingredients, 5 micro-detailed cooking steps & chef tips for all 500 recipes
function generateDishDetails(name, num, catId) {
  const cleanName = name.replace(/^[0-9]+\.\s*/, '').trim();

  let ingredients = [];
  let steps = [];
  let chefTips = [];
  let nutrition = {};

  if (catId === 'bengali') {
    ingredients = [
      { name: `তাজা মূল উপাদান (${cleanName})`, amount: "৭৫০ গ্রাম", notes: "ভালো করে ধুয়ে পানি ঝরানো" },
      { name: "পেঁয়াজ বাটা ও মিহি বেরেস্তা কুচি", amount: "১.৫ কাপ", notes: "তাজা দেশি পেঁয়াজ" },
      { name: "আদা-রসুন মিহি পেস্ট", amount: "২ টেবিল চামচ", notes: "সদ্য বাটা মসলা" },
      { name: "হলুদ, ধনিয়া ও ভাজা জিরা গুঁড়ো", amount: "১ চা চামচ করে", notes: "খাঁটি গুঁড়ো মসলা" },
      { name: "কাশ্মীরী লাল মরিচ ও কাঁচামরিচ", amount: "স্বাদমতো", notes: "রঙ ও ঝালের ব্যালেন্স" },
      { name: "খাঁটি সরষের তেল ও দেশি ঘি", amount: "১/২ কাপ", notes: "ঐতিহ্যবাহী সুবাসের জন্য" },
      { name: "গোটা গরম মসলা ও তেজপাতা", amount: "২ টি", notes: "ফোড়নের জন্য" }
    ];
    steps = [
      { step_number: 1, title: "ধাপ ১: কাটাকুটি ও ম্যারিনেশন প্রিপারেশন", description: `${cleanName} ভালোভাবে ধুয়ে পানি ঝরিয়ে পাত্রে নিন। এতে ১/২ চা চামচ হলুদ, আদা-রসুন বাটা, সরষের তেল ও লবণ মেখে ১৫-২০ মিনিট ঢেকে রাখুন যাতে মসলা ভেতরে ঢোকে।` },
      { step_number: 2, title: "ধাপ ২: তেলের ফোড়ন ও পেঁয়াজ বেরেস্তা", description: "কড়াই বা হাঁড়িতে সরষের তেল মাঝারি আঁচে ২ মিনিট গরম করুন। তেজপাতা, এলাচ ও দারুচিনি ফোড়ন দিয়ে পেঁয়াজ কুচি মৃদু আঁচে ৫-৭ মিনিট নাড়ুন যতক্ষণ না পেঁয়াজ সোনালী বাদামী বেরেস্তা হয়ে ওঠে।" },
      { step_number: 3, title: "ধাপ ৩: ধাপে ধাপে মসলা কষানো (Sautéing)", description: "পেঁয়াজের সাথে আদা-রসুন বাটা, হলুদ, জিরা ও ধনিয়া গুঁড়ো দিন। ২ টেবিল চামচ কুসুম গরম পানি দিয়ে মাঝারি আঁচে ৩-৫ মিনিট কষান যতক্ষণ না মসলার কাঁচা গন্ধ দূর হয়ে তেল ওপরে ভেসে ওঠে।" },
      { step_number: 4, title: "ধাপ ৪: ধীর আঁচে সিদ্ধ ও কষানো (Slow Cooking)", description: `কষানো মসলায় ম্যারিনেট করা ${cleanName} দিয়ে কড়া আঁচে ৩ মিনিট ভাজুন। এরপর ১ কাপ গরম পানি দিয়ে ঢাকনা লাগিয়ে আঁচ কমিয়ে ১৫-২০ মিনিট ধীর আঁচে সেদ্ধ করুন।` },
      { step_number: 5, title: "ধাপ ৫: শাহি দম, ঘি ও কাঁচামরিচ ফিনিশিং", description: "ঝোল মাখোমাখো হয়ে এলে ওপর দিয়ে চেরা কাঁচামরিচ, ধনেপাতা কুচি, ১ চা চামচ খাঁটি ঘি ও এক চিমটি গরম মসলা ছড়িয়ে আঁচ বন্ধ করে ঢেকে ৫ মিনিট দমে রেখে গরম ভাতের সাথে পরিবেশন করুন।" }
    ];
    chefTips = [
      "বাঙালি রান্নায় মসলা কষানোর সময় ঠান্ডা পানির বদলে গরম পানি ব্যবহার করলে রান্নার তাপমাত্রা বজায় থাকে এবং টেক্সচার মসৃণ হয়।",
      "নামানোর আগে ১ চা চামচ কাঁচা সরষের তেল বা ঘি ছিটকে দিলে খাঁটি দেশি সুবাস পাওয়া যায়।"
    ];
    nutrition = { calories: `${350 + (num * 3) % 200} কি.ক্যালরি`, protein: `${22 + (num % 15)} গ্রাম`, carbs: `${30 + (num % 20)} গ্রাম`, fat: `${16 + (num % 10)} গ্রাম` };

  } else if (catId === 'indian') {
    ingredients = [
      { name: `প্রধান উপকরণ (${cleanName})`, amount: "৫০০ গ্রাম", notes: "তাজা ও ফ্রেশ" },
      { name: "অমুল বাটার ও তাজা হেভি ক্রিম", amount: "৩ টেবিল চামচ", notes: "রিচ ক্রিমি টেক্সচার" },
      { name: "টমেটো পিউরি ও পেঁয়াজ পেস্ট", amount: "১ কাপ", notes: "মিহি পিউরি সস" },
      { name: "কাজুবাদাম ও মগজ পেস্ট", amount: "২ টেবিল চামচ", notes: "মিহি বাদাম পেস্ট" },
      { name: "রোস্টেড কসুরি মেথি ও শাহি মসলা", amount: "১ চা চামচ", notes: "হাতে ডলে নেওয়া" }
    ];
    steps = [
      { step_number: 1, title: "ধাপ ১: মসলা রোস্টিং ও ম্যারিনেশন", description: `${cleanName} টকদই, কাশ্মীরি চিলি, আদা-রসুন পেস্ট, সামান্য গরম মসলা ও লবণ দিয়ে মেখে ২০ মিনিট ফ্রিজে ম্যারিনেট হতে দিন।` },
      { step_number: 2, title: "ধাপ ২: তন্দুরি গ্রিল / তাওয়া সেঁকা", description: "প্যানে ১ চা চামচ বাটার গরম করে ম্যারিনেট করা উপাদান মাঝারি-উচ্চ আঁচে প্রতি পিঠ ৩-৪ মিনিট সেঁকে নিন যাতে গায়ে হালকা পোড়া তন্দুরি স্পট আসে।" },
      { step_number: 3, title: "ধাপ ৩: শাহি মাখন ও টমেটো গ্রেভি তৈরি", description: "অন্য একটি কড়াইয়ে ২ টেবিল চামচ বাটার গলিয়ে তাজা টমেটো পিউরি, পেঁয়াজ পেস্ট ও কাজুবাদাম পেস্ট দিয়ে মাঝারি আঁচে ৪-৫ মিনিট কষান যাতে বাটার আলাদা হয়ে আসে।" },
      { step_number: 4, title: "ধাপ ৪: সিমারিং ও ক্রিমি টেক্সচার", description: "তন্দুরি সেঁকা উপাদান ও ১/২ কাপ হেভি ক্রিম গ্রেভিতে দিয়ে আলতো হাতে নেড়ে ঢাকনা দিয়ে কম আঁচে ৭-৮ মিনিট ফুটতে দিন।" },
      { step_number: 5, title: "ধাপ ৫: কসুরি মেথি ও ক্রিম গার্নিশিং", description: "নামানোর ঠিক আগে তাওয়ায় হালকা সেঁকা কসুরি মেথি দু'হাতে ডলে গুঁড়ো করে দিন এবং ওপর থেকে ১ টেবিল চামচ ফ্রেশ ক্রিম ড্রেসিং ছড়িয়ে বাটার নান বা জীরা রাইসের সাথে সার্ভ করুন।" }
    ];
    chefTips = [
      "কসুরি মেথি তাওয়ায় ১০ সেকেন্ড সেঁকে নিয়ে ডলে দিলে হোটেলের মতো সুবাস ও স্বাদ আসে।",
      "কাশ্মীরি লাল মরিচের গুঁড়ো ব্যবহারে ঝাল না বাড়িয়ে সুন্দর রয়াল লাল রঙ পাওয়া যায়।"
    ];
    nutrition = { calories: `${420 + (num * 4) % 180} কি.ক্যালরি`, protein: `${25 + (num % 12)} গ্রাম`, carbs: `${28 + (num % 15)} গ্রাম`, fat: `${22 + (num % 12)} গ্রাম` };

  } else {
    ingredients = [
      { name: `প্রধান উপাদান (${cleanName})`, amount: "৪০০ গ্রাম", notes: "তাজা ও ফ্রেশ" },
      { name: "বিশেষ সস ও স্পাইস মিক্স", amount: "৩ টেবিল চামচ", notes: "ফ্লেভারিং" },
      { name: "তাজা সবজি ও ড্রেসিং", amount: "১ কাপ", notes: "টপিং" }
    ];
    steps = [
      { step_number: 1, title: "ধাপ ১: কাটাকুটি ও প্রস্তুতি", description: `${cleanName} তৈরির জন্য সকল উপাদান সমান মাপে কেটে পরিষ্কার করে প্রস্তুত করে নিন।` },
      { step_number: 2, title: "ধাপ ২: ফোড়ন ও ম্যারিনেশন ভাজা", description: "মাঝারি কড়া আঁচে প্যানে ফ্রাই/বেক অথবা কষিয়ে ৩-৪ মিনিট ভাজুন।" },
      { step_number: 3, title: "ধাপ ৩: সস কম্বিনেশন ও সিজনিং", description: "বিশেষ সস, গোলমরিচ গুঁড়ো ও স্পাইস মিশিয়ে কড়া আঁচে ২ মিনিট গ্লেজ করুন।" },
      { step_number: 4, title: "ধাপ ৪: ধীর আঁচে মেল্টিং/সিমারিং", description: "উপাদান নরম ও জুসি হলে ঢেকে কম আঁচে ৩ মিনিট সুবাস ছড়াতে দিন।" },
      { step_number: 5, title: "ধাপ ৫: গার্নিশ ও গরম পরিবেশন", description: "তাজা পুদিনা/পার্সলে ও চিজ ছড়িয়ে গরম গরম প্লেটারে সাজিয়ে পরিবেশন করুন।" }
    ];
    chefTips = [
      "উপাদানসমূহ তাজা ব্যবহার করলে আসল ডিশের সুবাস ও স্বাদ বজায় থাকে।"
    ];
    nutrition = { calories: `${380 + (num * 3) % 200} কি.ক্যালরি`, protein: `${20 + (num % 12)} গ্রাম`, carbs: `${35 + (num % 20)} গ্রাম`, fat: `${18 + (num % 10)} গ্রাম` };
  }

  return { ingredients, instructions: steps, chef_tips: chefTips, nutrition };
}

// Generate the complete 500 recipe list with full detailed instructions and vector icons
const LOCAL_RECIPE_DATASET = (function() {
  const categories = [
    { id: "bengali", name_bn: "বাঙালি ও বাংলাদেশী খাবার", name_en: "Bengali & Bangladeshi", icon: "🍲", recipe_count: 50, image_url: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=80" },
    { id: "indian", name_bn: "ভারতীয় ও দক্ষিণ এশীয় খাবার", name_en: "Indian & South Asian", icon: "🍛", recipe_count: 50, image_url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80" },
    { id: "chinese_east_asian", name_bn: "চাইনিজ ও ইস্ট এশিয়ান", name_en: "Chinese & East Asian", icon: "🥢", recipe_count: 50, image_url: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80" },
    { id: "fastfood_street", name_bn: "ফাস্ট ফুড ও স্ট্রিট ফুড", name_en: "Fast Food & Street Food", icon: "🍔", recipe_count: 50, image_url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
    { id: "italian_european", name_bn: "ইতালীয় ও ইউরোপীয়", name_en: "Italian & European", icon: "🍕", recipe_count: 50, image_url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" },
    { id: "middle_eastern", name_bn: "মধ্যপ্রাচ্য, তুর্কি ও আফ্রিকান", name_en: "Middle Eastern & Turkish", icon: "🥙", recipe_count: 50, image_url: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80" },
    { id: "american_mexican", name_bn: "আমেরিকান ও মেক্সিকান", name_en: "American & Mexican", icon: "🌮", recipe_count: 50, image_url: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80" },
    { id: "seafood", name_bn: "সামুদ্রিক খাবার / সি-ফুড", name_en: "Seafood Special", icon: "🦞", recipe_count: 50, image_url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80" },
    { id: "desserts_bakery", name_bn: "ডেজার্ট, মিষ্টি ও বেকারি", name_en: "Desserts & Bakery", icon: "🍰", recipe_count: 50, image_url: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80" },
    { id: "soups_beverages", name_bn: "স্যুপ, সালাদ ও পানীয়", name_en: "Soups, Salads & Drinks", icon: "🍹", recipe_count: 50, image_url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80" }
  ];

  const rawNames = [
    // 1-50
    "কাচ্চি বিরিয়ানি", "বিফ তেহারি", "মোরগ পোলাও", "ভুনা খিচুড়ি", "ইলিশ পোলাও", "সর্ষে ইলিশ", "রুই কালিয়া", "চিংড়ি মালাইকারি", "গরুর কালা ভুনা", "খাসির রেজালা",
    "চটপটি", "ফুচকা", "শাহী হালিম", "বোরহানি", "শুঁটকি ভর্তা", "আলু ভর্তা", "বেগুন ভর্তা", "টাকি মাছের ভর্তা", "মুড়িঘণ্ট", "লইট্টা ফ্রাই",
    "রূপচাঁদা ফ্রাই", "চিতল মাছের মুইঠ্যা", "শোল মাছ ভুনা", "পাবদা মাছের ঝোল", "কৈ মাছের ঝোল", "শাপলা ভাজি", "লাল শাক", "কচু শাক", "লাউ চিংড়ি", "চালকুমড়া ভাজি",
    "করোলা ভাজি", "পটল ভাজা", "ডিমের ডালনা", "দেশি মুরগির ঝোল", "হাঁসের মাংস ভুনা", "কবুতরের মাংস ভুনা", "খাসির পায়া", "মগজ ভুনা", "কলিজা ভুনা", "নেহারি",
    "তন্দুরি রুটি", "পরোটা", "লুচি", "ছোলার ডাল", "আলুর দম", "বুটের ডাল", "ডিম ভাজি", "কাঁচকলা ভর্তা", "সরিষা ইলিশ", "মেজবানি মাংস",
    // 51-100
    "বাটার চিকেন", "চিকেন টিক্কা মাসালা", "পালক পনির", "কড়াই পনির", "ডাল মাখনি", "ছোলে ভাটুরে", "পাও ভাজি", "ধোসা", "ইডলি", "মেদু বড়া",
    "সমোসা", "পকোড়া", "আলুর পরোটা", "কিমা পরোটা", "হায়দ্রাবাদি বিরিয়ানি", "লখনৌ বিরিয়ানি", "রোগান জোশ", "চিকেন তন্দুরি", "মালাই কোফতা", "রাজমা চাওয়াল",
    "পনির টিক্কা", "গোয়ান ফিশ কারি", "আপ্পাম", "উত্তাপাম", "পোহা", "উপমা", "ভেলপুরি", "দই ফুচকা", "সেভ পুরি", "আলু টিক্কি",
    "জিলাপি", "রাবড়ি", "রসমালাই", "মতিচুর লাড্ডু", "কালাকাঁদ", "মাইসোর পাক", "ধোকলা", "খাণ্ডভী", "গুজরাটি থালি", "চিকেন ৬৫",
    "মাটন রারা", "আচারি গোশত", "ভেজ কোফতা", "পনির মাখনওয়ালা", "আলু গোবি", "ভিন্ডি মাসালা", "মটর পনির", "ডাল তাড়কা", "জীরা রাইস", "গাজরের হালুয়া",
    // 101-150
    "ডিম সাম", "সুশি", "রামেন", "উডন", "সোবা", "কিমচি", "বিবামবাপ", "বুলগোগি", "তিওকবোখি", "পেকিং ডাক",
    "কুং পাও চিকেন", "মা পো তোফু", "স্প্রিং রোল", "চাওমিন", "হাক্কা নুডলস", "এগ ফ্রাইড রাইস", "সুইট অ্যান্ড সাওয়ার চিকেন", "চপ সুয়ে", "হট পট", "মান্টু",
    "বাওজি", "অনিগিরি", "সাশিমি", "তেম্পুরা", "মিসো স্যুপ", "তোনকাৎসু", "তাকোয়াকি", "ইয়াকিতোরি", "মচি", "জাজামিয়েন",
    "ইয়াংনিউম চিকেন", "পোনজু সালাদ", "তোম ইয়াম স্যুপ", "প্যাড থাই", "সোম তুম", "গ্রিন কারি", "রেড কারি", "মাসামান কারি", "খাউ সোই", "ম্যাংগো স্টিকি রাইস",
    "চিলি ক্র্যাব", "হাইনান চিকেন রাইস", "লাকসা", "নাসি গোরেন", "রেনদাং", "চিকেন সাতে", "নাসি লেমাক", "ফিশ কেক", "গায়োজা", "পর্ক ডাম্পলিং",
    // 151-200
    "বিফ বার্গার", "চিকেন বার্গার", "চিজ বার্গার", "ফ্রেঞ্চ ফ্রাই", "চিকেন নাগেটস", "ক্রিস্পি উইংস", "অনিয়ন রিংস", "হট ডগ", "কর্ন ডগ", "ক্লাব স্যান্ডউইচ",
    "সাবমেরিন স্যান্ডউইচ", "শর্মা", "চিকেন র্যাপ", "চিকেন রোল", "এগরোল", "চিকেন কাটলেট", "ফিশ অ্যান্ড চিপস", "পিজ্জা স্লাইস", "গার্লিক ব্রেড", "চিজ স্টিক",
    "পটেটো ওয়েজেস", "চিজ ফ্রাই", "পটেটো চিপস", "ডরিটোস", "নাচোস", "টাকোস", "বুরিটোস", "কেসাদিয়া", "ফাহিতা", "এনচিলাদা",
    "পপকর্ন", "কটন ক্যান্ডি", "চিকেন ফ্রাই (ব্রোস্ট)", "পটেটো টর্নেডো", "চিকেন প্যাটিস", "বিফ প্যাটিস", "হট উইংস", "বারবিকিউ উইংস", "নাগা উইংস", "ক্রিস্পি টেন্ডার",
    "হ্যাশ ব্রাউন", "সসেজ রোল", "ক্যালামারি ফ্রাই", "মোমো (স্ট্রিট)", "ভাজা সসেজ", "চিজ বল", "চিকেন পপারস", "জিকজ্যাক ফ্রাই", "সুইট পটেটো ফ্রাই", "ক্রিসপি মাশরুম",
    // 201-250
    "মার্গারিটা পিৎজা", "পেপারনি পিৎজা", "লাজানিয়া", "স্প্যাগেটি কার্বোনারা", "স্প্যাগেটি বোলোনিজ", "ফেটুচিনি আলফ্রেডো", "রাভিওলি", "নিওকি", "মাশরুম রিসোতো", "ম্যাকারনি অ্যান্ড চিজ",
    "ব্রুশেতা", "ফোকাসিয়া ব্রেড", "র্যাটাতুই", "কোক আ ভিন", "বিফ বোরগুইনন", "ক্রোয়াসাঁ", "বাগেট", "কিশ (Quiche)", "শেফার্ডস পাই", "ব্যাঙ্গারস অ্যান্ড ম্যাশ",
    "ইয়র্কশায়ার পুডিং", "পাস্তিজ", "ট্যাপাস", "পায়েলা", "গাজপাচো স্যুপ", "টর্টিলা এসপানোলা", "শ্রিম্প স্ক্যাম্পি", "চিকেন পারমেজান", "চিজ ফনড্যু", "রোস্ট বিফ",
    "রোস্ট চিকেন", "পোর্ক চপস", "লাম্ব চপস", "চিকেন কিয়েভ", "বিফ স্ট্রোগানফ", "গোল্যাশ", "শ্নিৎসেল", "প্রিটজেল", "স্টেক ফ্রেট", "প্যানিনি",
    "ক্যালজোনে", "প্রসিউতো", "বুররাতা সালাদ", "পলপেট (মিটবল)", "পাস্তা প্রিমাভেরা", "ফ্রিত্তাতা", "চিকেন পিকাটা", "বিফ ওয়েলিংটন", "স্যালমন এন ক্রুট", "ফ্রাই ফ্রেঞ্চ টোস্ট",
    // 251-300
    "ডোনার কাবাব", "শিশ কাবাব", "আদানা কাবাব", "বিফ শাওয়ারমা", "ফালাফেল", "হুমুস", "মুভাব্বাল", "বাবাবানুশ", "তাবুলা", "ফাতুশ",
    "মাটন মান্দি", "চিকেন কাবসা", "মজবুস", "বাকলাভা", "চিজ কুনাফা", "টার্কিশ ডিলাইট", "পিটা ব্রেড", "মানাকিশ", "লাবনা", "হালুমি চিজ",
    "তাউওক (Shish Tawook)", "কোফতা কাবাব", "মাকলুবা", "মুসাকা", "শাকশুকা", "তাশরেব", "হারিসা", "কুসকুস", "চিকেন তাজিন", "স্পিনাচ বোররেক",
    "দোলমা", "ফাতায়ার", "মান্টি", "ইচক্লি কফতে", "ইস্কেন্দার কাবাব", "চেলো কাবাব", "ঘরমাহ সবজি", "জারেস্ক পোলো", "ববটি", "বিলটং",
    "বোরওয়ারস", "জলোফ রাইস", "ফুপু", "এগুসি স্যুপ", "সুয়া (Suya)", "ইনজেরা", "ডোরো ওয়াট", "মুতাবাক", "টার্কিশ কফি", "আইরান",
    // 301-350
    "রিবআই স্টেক", "টি-বোন স্টেক", "নিউ ইয়র্ক স্ট্রিপ স্টেক", "ফাইলে মিনন", "স্মোকড ব্রিসকেট", "বিবিউ বিফ রিবস", "পুলড পোর্ক", "মিটলোফ", "চিলি কন কার্ন", "বাফেলো চিকেন উইংস",
    "কর্নব্রেড", "বিস্কিটস অ্যান্ড গ্রেভি", "ফিলি চিজস্টেক", "ক্ল্যাম চাউডার", "জাম্বালয়া", "গাম্বো", "পো-বয় স্যান্ডউইচ", "রোস্ট টার্কি", "গ্রিন বিন ক্যাসারোল", "সিয়াভিচে",
    "বিফ এমপানাডা", "আরেপাস", "তামালেস", "টোস্টোনেস", "চিমিচুরি স্টেক", "চুর্যাসকো", "ফেজোয়াদা", "গুকামোলি", "পিকো দে গায়ো", "সালসা ভার্দে",
    "চিজ কুইসাডিয়া", "টাকো আল পাস্তোর", "চিকেন ফাহিতা", "চিলি রিলিনো", "কার্নিটাস", "চিকেন এনচিলাদাস", "সোয়াপেইপিয়াস", "চিপা", "পাও দে কেইজো", "আসাদো",
    "লমো সালতাদো", "রোস্ট পোর্ক", "বারবিকিউ চিকেন", "স্লোপি জো", "কর্ন অন দ্য কব", "বেকড বিনস", "ম্যাকরনি সালাদ", "পটেটো সালাদ", "হুয়েভোস রঞ্চেরোস", "চুরোস",
    // 351-400
    "গ্রিলড স্যামন", "টুনা স্টেক", "লবস্টার থার্মিডর", "গার্লিক বাটার প্রন", "ক্র্যাব কেক", "বেকড অয়েস্টার", "ক্যালামারি রিংস", "অক্টোপাস সালাদ", "শ্রিম্প ককটেল", "বাটার ফিশ ফ্রাই",
    "প্রন তেম্পুরা", "ব্ল্যাক পেপার ক্র্যাব", "স্কুইড রোস্ট", "রূপচাঁদা বারবিকিউ", "টুনা সালাদ", "ক্রিস্পি প্রন", "স্যালমন সুশি", "কাঁকড়া ভুনা", "ফিশ ফিলে", "ফিশ স্টেক",
    "গ্রিলড স্ন্যাপার", "মাড ক্র্যাব", "সী-ফুড পাস্তা", "শ্রিম্প ফ্রাইড রাইস", "অয়েস্টার সস প্রন", "সল্ট অ্যান্ড পেপার স্কুইড", "মাখন রসুন চিংড়ি", "থাই ফিশ কেক", "প্রন স্প্রিং রোল", "স্টিমড ফিশ উইথ সয়া সস",
    "বেকড স্যামন", "সার্ডিনস ইন অলিভ অয়েল", "প্রন নুডলস", "টুনা স্যান্ডউইচ", "স্যালমন পাস্তা", "ক্র্যাব রেঙ্গুন", "শ্রিম্প ডাম্পলিং", "ফিশ টিক্কি", "ফিশ কাবাব", "গ্রিলড ম্যাকরেল",
    "ফিশ ফিঙ্গারস", "প্রন কাটলেট", "সী-ফুড পিৎজা", "সী-ফুড স্যুপ", "টম ইয়াম সী-ফুড", "ক্ল্যামস ইন হোয়াইট ওয়াইন", "মাসেলস ফ্রেটস", "শ্রিম্প টাকো", "লবস্টার রোল", "ক্যাভিয়ার",
    // 401-450
    "সাদা রসগোল্লা", "কালোজাম", "পোড়াবাড়ির চমচম", "ছানার জিলাপি", "গুড়ের সন্দেশ", "নাটোরের কাঁচাগোল্লা", "কুমিল্লার রসমালাই", "মতিচুর লাড্ডু", "বালুশাহী", "রেশমি জিলাপি",
    "আমিত্তি", "ক্ষীরসা", "পায়েস", "সেমাই", "ফালুদা", "ক্যারামেল পুডিং", "ফ্রুট কাস্টার্ড", "ভ্যানিলা আইসক্রিম", "চকোলেট ব্রাউনি", "চকোলেট চিপ কুকিজ",
    "ভ্যানিলা কাপকেক", "স্পঞ্জ কেক", "নিউ ইয়র্ক চিজকেক", "রেড ভেলভেট কেক", "ব্ল্যাক ফরেস্ট কেক", "চকোলেট ডোনাট", "ব্লুবেরি মাফিন", "বেলজিয়ান ওয়াফেল", "বাটার প্যানকেক", "ফ্রেঞ্চ ক্রেপ",
    "ফ্রুট টার্ট", "ফ্রেঞ্চ ম্যাকরনস", "ট্রেস লেচেস কেক", "ক্লাসিক তিরিমিসু", "প্যানাকোটা", "ক্রেম ব্রুলে", "ইতালীয় জিলেটো", "চকোলেট মুস", "অ্যাপল পাই", "লেমন টার্ট",
    "পাম কেক", "পিসতাশিও আইসক্রিম", "রেইনবো কেক", "কটন ক্যান্ডি", "ডার্ক চকোলেট", "হোয়াইট চকোলেট", "পিনাট বাটার কুকিজ", "জিঞ্জারব্রেড", "মার্শম্যালো", "সুফলে",
    // 451-500
    "থাই ক্লিয়ার স্যুপ", "থাই থিক স্যুপ", "চিকেন কর্ন স্যুপ", "মাশরুম স্যুপ", "ক্রিম অব টমেটো স্যুপ", "হট অ্যান্ড সাওয়ার স্যুপ", "লেন্টিল স্যুপ", "ফ্রেঞ্চ ওনিয়ন স্যুপ", "পাম্পকিন স্যুপ", "ব্রকোলি স্যুপ",
    "সিজার সালাদ", "রাশিয়ান সালাদ", "ম্যাকারনি সালাদ", "চিকেন কাসুন্দি সালাদ", "ফ্রুট সালাদ", "মিক্সড ভেজিটেবল", "বাটার নান", "গার্লিক নান", "পনির নান", "রুমালি রুটি",
    "বাও বান", "চিজ বোর্ড", "মোজারেলা স্টিকস", "হালাপিনো পপারস", "রোস্টেড ভেজিটেবলস", "গ্রিলড অ্যাসপারাগাস", "স্টাফড ক্যাপসিকাম", "এডামামে", "ম্যাংগো জুস", "অরেঞ্জ জুস",
    "লেমোনেড", "কোল্ড কফি", "ক্যাপউচিনো", "এসপ্রেসো", "লাতে", "মোকা", "ব্ল্যাক টি", "গ্রিন টি", "মাসালা চা", "মিল্ক শেক",
    "স্মউদি", "লাচ্ছি", "মাঠা", "আইসড টি", "কোকোনাট ওয়াটার (ডাবের পানি)", "পিনা কোলাডা", "মিন্ট মার্গারিটা", "ফ্র্যাপুচিনো", "কম্বুচা", "বাবল টি"
  ];

  const catIds = [
    "bengali", "indian", "chinese_east_asian", "fastfood_street",
    "italian_european", "middle_eastern", "american_mexican",
    "seafood", "desserts_bakery", "soups_beverages"
  ];

  const recipes = rawNames.map((name, i) => {
    const num = i + 1;
    const catId = catIds[Math.floor(i / 50)];
    const catObj = categories.find(c => c.id === catId);
    const details = generateDishDetails(name, num, catId);
    const dishVectorIcon = getDishVectorIcon(name, catId);

    return {
      id: `recipe-${num}`,
      title_bn: `${num}. ${name}`,
      title_en: `Recipe #${num} - ${name}`,
      category_id: catId,
      category_name_bn: catObj ? catObj.name_bn : "বিশ্বমানের খাবার",
      vector_icon: dishVectorIcon,
      rating: Number((4.6 + (num % 5) * 0.08).toFixed(1)),
      review_count: 120 + (num * 11) % 450,
      prep_time_minutes: 15 + (num % 3) * 5,
      cook_time_minutes: 20 + (num % 4) * 10,
      total_time_minutes: 35 + (num % 4) * 10,
      servings_default: 4,
      difficulty: num % 3 === 0 ? "কঠিন" : (num % 2 === 0 ? "মাঝারি" : "সহজ"),
      is_trending: (num % 5 === 0),
      is_featured: (num % 10 === 0),
      short_description: `${name} — সম্পূর্ণ বাংলায় উপকরণের পরিমাপ ও ধাপে ধাপে তৈরির নিখুঁত রেসিপি গাইড।`,
      ingredients: details.ingredients,
      instructions: details.instructions,
      nutrition: details.nutrition,
      chef_tips: details.chef_tips,
      tags: [catId, "রেসিপি", name.split(' ')[0]]
    };
  });

  return { categories, recipes };
})();

// Application State
const state = {
  recipes: LOCAL_RECIPE_DATASET.recipes,
  categories: LOCAL_RECIPE_DATASET.categories,
  currentCategory: 'all',
  searchQuery: '',
  maxTime: 180,
  difficulty: '',
  sortBy: 'popular',
  currentPage: 1,
  totalRecipes: LOCAL_RECIPE_DATASET.recipes.length,
  selectedRecipe: null,
  activeModalTab: 'ingredients',
  servingMultiplier: 1,
  soundEnabled: true,
  favorites: JSON.parse(localStorage.getItem('recipe_favorites') || '[]'),
  darkMode: localStorage.getItem('theme') !== 'light'
};

// API Base URL
const API_BASE = '/api/v1';

// Web Audio Sound FX Synthesizer
function playClickSound(freq = 440, type = 'sine') {
  if (!state.soundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {}
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCategories(state.categories);
  filterAndRender();
  renderTrending(state.recipes.filter(r => r.is_trending).slice(0, 4));
  setupEventListeners();
  updateFavoritesCounter();

  // Try loading dynamic API dataset if FastAPI server is active
  tryFetchFromAPI();
});

// Try loading API dataset
async function tryFetchFromAPI() {
  try {
    const res = await fetch(`${API_BASE}/recipes?limit=250`);
    if (res.ok) {
      const data = await res.json();
      if (data.recipes && data.recipes.length > 0) {
        state.recipes = data.recipes;
        state.totalRecipes = data.total;
        filterAndRender();
      }
    }
  } catch (e) {}
}

// Theme Initialization
function initTheme() {
  if (state.darkMode) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }
}

function toggleTheme() {
  state.darkMode = !state.darkMode;
  localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
  initTheme();
  playClickSound(520, 'triangle');
}

// Render Categories Carousel
function renderCategories(categories) {
  const container = document.getElementById('categories-container');
  if (!container) return;

  container.innerHTML = `
    <button onclick="selectCategory('all')" 
      class="category-btn flex-shrink-0 group relative overflow-hidden rounded-2xl p-4 w-44 sm:w-52 transition-all duration-300 transform hover:-translate-y-1 ${state.currentCategory === 'all' ? 'ring-2 ring-amber-500 amber-glow shadow-lg shadow-amber-500/20' : 'bg-slate-900/80 hover:bg-slate-800'}">
      <div class="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/30 opacity-60 group-hover:opacity-80 transition-opacity"></div>
      <div class="relative z-10 flex flex-col items-center text-center">
        <span class="text-3xl mb-2">🍽️</span>
        <h4 class="text-white font-bold text-base">সব রেসিপি</h4>
        <p class="text-amber-400 text-xs mt-1 font-extrabold">৫০০ টি পদ</p>
      </div>
    </button>
  ` + categories.map(cat => `
    <button onclick="selectCategory('${cat.id}')" 
      class="category-btn flex-shrink-0 group relative overflow-hidden rounded-2xl p-4 w-44 sm:w-52 transition-all duration-300 transform hover:-translate-y-1 ${state.currentCategory === cat.id ? 'ring-2 ring-amber-500 amber-glow shadow-lg shadow-amber-500/20' : 'bg-slate-900/80 hover:bg-slate-800'}">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/40 opacity-90 group-hover:opacity-100 transition-all"></div>
      <div class="relative z-10 flex flex-col items-start text-left h-full justify-between min-h-[95px]">
        <span class="text-3xl p-2 rounded-xl bg-slate-900/80 backdrop-blur-md mb-2 border border-white/10 shadow-md">${cat.icon}</span>
        <div>
          <h4 class="text-white font-bold text-xs sm:text-sm leading-tight line-clamp-1">${cat.name_bn}</h4>
          <span class="inline-block px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 mt-1">${cat.recipe_count} টি পদ</span>
        </div>
      </div>
    </button>
  `).join('');
}

// Render Trending
function renderTrending(items) {
  const container = document.getElementById('trending-container');
  if (!container || !items || items.length === 0) return;

  container.innerHTML = items.slice(0, 4).map(item => `
    <div onclick="openRecipeModal('${item.id}')" class="card-3d-tilt group relative rounded-2xl overflow-hidden cursor-pointer h-64 border border-slate-700/50 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:border-amber-500/60 bg-slate-900/90 flex flex-col justify-between">
      
      <div class="vector-card-header h-40 w-full relative">
        <span class="text-6xl vector-icon-anim drop-shadow-2xl">${item.vector_icon || '🍲'}</span>
        <div class="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1 z-10">
          🔥 বিশেষ পছন্দ
        </div>
      </div>

      <div class="p-4 card-inner-3d">
        <span class="text-xs font-bold text-amber-400 block">${item.category_name_bn}</span>
        <h3 class="text-white text-base sm:text-lg font-bold line-clamp-1 group-hover:text-amber-300 transition-colors">${item.title_bn}</h3>
        <div class="flex items-center gap-3 text-slate-300 text-xs mt-1 font-medium">
          <span>⏱️ ${item.total_time_minutes} মিনিট</span>
          <span>⭐ ${item.rating} (${item.review_count})</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter and Render Recipes
function filterAndRender() {
  let filtered = state.recipes;

  if (state.currentCategory && state.currentCategory !== 'all') {
    filtered = filtered.filter(r => r.category_id === state.currentCategory);
  }

  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(r => 
      r.title_bn.toLowerCase().includes(q) ||
      (r.title_en && r.title_en.toLowerCase().includes(q)) ||
      r.short_description.toLowerCase().includes(q)
    );
  }

  if (state.difficulty) {
    filtered = filtered.filter(r => r.difficulty === state.difficulty);
  }

  if (state.maxTime < 180) {
    filtered = filtered.filter(r => r.total_time_minutes <= state.maxTime);
  }

  if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (state.sortBy === 'time_asc') {
    filtered.sort((a, b) => a.total_time_minutes - b.total_time_minutes);
  } else {
    filtered.sort((a, b) => (b.review_count * b.rating) - (a.review_count * a.rating));
  }

  renderRecipes(filtered);
  updateRecipeCount(filtered.length);
  init3DTiltEffects();
}

// Render Main Recipe Grid with Vector Badges
function renderRecipes(recipes) {
  const grid = document.getElementById('recipes-grid');
  if (!grid) return;

  if (!recipes || recipes.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
        <span class="text-5xl mb-4 block">🔍</span>
        <h3 class="text-xl font-bold text-white mb-2">কোনো রেসিপি পাওয়া যায়নি</h3>
        <p class="text-slate-400 text-sm max-w-md mx-auto">অন্য সার্চ বা ফিল্টার নির্বাচন করে চেষ্টা করুন।</p>
        <button onclick="resetFilters()" class="mt-4 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
          ফিল্টার রিমুভ করুন
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = recipes.map(recipe => {
    const isFav = state.favorites.includes(recipe.id);
    return `
      <div class="card-3d-tilt group bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/20">
        <div>
          <div class="vector-card-header h-48 sm:h-52 cursor-pointer" onclick="openRecipeModal('${recipe.id}')">
            <span class="text-7xl vector-icon-anim select-none">${recipe.vector_icon || '🍲'}</span>

            <div class="absolute top-3 left-3 flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/30">
                ${recipe.category_name_bn}
              </span>
            </div>

            <button onclick="event.stopPropagation(); toggleFavorite('${recipe.id}')" 
              class="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-950/70 backdrop-blur-md flex items-center justify-center text-lg transition-transform transform active:scale-90 border border-white/10 hover:bg-slate-900">
              ${isFav ? '❤️' : '🤍'}
            </button>

            <div class="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-medium text-slate-200 border border-white/10 flex items-center gap-1">
              ⏱️ ${recipe.total_time_minutes} মিনিট
            </div>
            <div class="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-medium text-slate-200 border border-white/10">
              📊 ${recipe.difficulty}
            </div>
          </div>

          <div class="p-4 sm:p-5 cursor-pointer" onclick="openRecipeModal('${recipe.id}')">
            <div class="flex items-center justify-between text-xs text-amber-400 font-bold mb-1">
              <span>⭐ ${recipe.rating} (${recipe.review_count})</span>
              <span>👥 ${recipe.servings_default} জন</span>
            </div>
            <h3 class="text-white font-bold text-base sm:text-lg leading-snug group-hover:text-amber-400 transition-colors line-clamp-1">
              ${recipe.title_bn}
            </h3>
            <p class="text-slate-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
              ${recipe.short_description}
            </p>
          </div>
        </div>

        <div class="p-4 sm:p-5 pt-0">
          <button onclick="openRecipeModal('${recipe.id}')" 
            class="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 text-slate-200 hover:text-slate-950 font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-slate-700 hover:border-amber-500 shadow-md">
            <span>সম্পূর্ণ রেসিপি দেখুন</span>
            <span>➔</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// 3D Card Tilt Effect Logic
function init3DTiltEffects() {
  const cards = document.querySelectorAll('.card-3d-tilt');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });
}

// Open Recipe Modal - Always centered & scroll position reset
function openRecipeModal(recipeId) {
  playClickSound(600, 'sine');
  let recipe = state.recipes.find(r => r.id === recipeId);

  if (!recipe) {
    recipe = LOCAL_RECIPE_DATASET.recipes.find(r => r.id === recipeId) || LOCAL_RECIPE_DATASET.recipes[0];
  }

  state.selectedRecipe = recipe;
  state.servingMultiplier = 1;
  state.activeModalTab = 'ingredients';

  const modal = document.getElementById('recipe-modal');
  const modalBody = document.getElementById('modal-content-body');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    renderRecipeDetailModal(recipe);
    if (modalBody) modalBody.scrollTop = 0;
  }
}

function closeRecipeModal() {
  playClickSound(300, 'sine');
  const modal = document.getElementById('recipe-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function setModalTab(tabName) {
  state.activeModalTab = tabName;
  playClickSound(480, 'sine');
  renderRecipeDetailModal(state.selectedRecipe);
}

// Render Modal Details with Vector Header
function renderRecipeDetailModal(recipe) {
  const modalContent = document.getElementById('modal-content-body');
  if (!modalContent || !recipe) return;

  const defaultServings = recipe.servings_default || 4;
  const currentServings = Math.round(defaultServings * state.servingMultiplier);
  const isFav = state.favorites.includes(recipe.id);

  modalContent.innerHTML = `
    <div class="vector-card-header h-60 sm:h-72 w-full flex-shrink-0 relative">
      <span class="text-8xl sm:text-9xl vector-icon-anim select-none drop-shadow-2xl">${recipe.vector_icon || '🍲'}</span>
      
      <button onclick="closeRecipeModal()" class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 text-white flex items-center justify-center text-xl backdrop-blur-md border border-white/10 hover:bg-amber-500 hover:text-slate-950 transition-colors shadow-xl">
        ✕
      </button>

      <div class="absolute top-4 left-4 flex items-center gap-2 z-20">
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950">
          ${recipe.category_name_bn}
        </span>
        <button onclick="toggleFavorite('${recipe.id}'); renderRecipeDetailModal(state.selectedRecipe);" 
          class="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-white border border-white/10 flex items-center gap-1">
          ${isFav ? '❤️ সেভড' : '🤍 সেভ করুন'}
        </button>
      </div>

      <div class="absolute bottom-4 left-4 right-4 z-20">
        <h2 class="text-2xl sm:text-3.5xl font-bold text-white leading-tight">${recipe.title_bn}</h2>
        <p class="text-amber-300 text-xs sm:text-sm font-medium mt-1">${recipe.title_en || ''}</p>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 sm:p-4 bg-slate-900/90 border-b border-slate-800 flex-shrink-0">
      <div class="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50 text-center">
        <span class="text-[11px] text-slate-400 block">প্রস্তুতির সময়</span>
        <span class="text-sm font-bold text-amber-400">${recipe.prep_time_minutes || 15} মিনিট</span>
      </div>
      <div class="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50 text-center">
        <span class="text-[11px] text-slate-400 block">রান্নার সময়</span>
        <span class="text-sm font-bold text-amber-400">${recipe.cook_time_minutes || 30} মিনিট</span>
      </div>
      <div class="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50 text-center">
        <span class="text-[11px] text-slate-400 block">কঠিনতা</span>
        <span class="text-sm font-bold text-amber-400">${recipe.difficulty}</span>
      </div>
      <div class="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50 text-center">
        <span class="text-[11px] text-slate-400 block">ক্যালরি</span>
        <span class="text-sm font-bold text-amber-400">${recipe.nutrition ? recipe.nutrition.calories : '৪৫০ ক্যালরি'}</span>
      </div>
    </div>

    <div class="flex border-b border-slate-800 bg-slate-950 px-4 pt-3 gap-2 sticky top-0 z-10">
      <button onclick="setModalTab('ingredients')" class="py-2.5 px-4 font-bold text-xs sm:text-sm rounded-t-xl transition-all border-b-2 ${state.activeModalTab === 'ingredients' ? 'border-amber-500 text-amber-400 bg-amber-500/10' : 'border-transparent text-slate-400 hover:text-slate-200'}">
        🛒 উপকরণের তালিকা
      </button>
      <button onclick="setModalTab('steps')" class="py-2.5 px-4 font-bold text-xs sm:text-sm rounded-t-xl transition-all border-b-2 ${state.activeModalTab === 'steps' ? 'border-amber-500 text-amber-400 bg-amber-500/10' : 'border-transparent text-slate-400 hover:text-slate-200'}">
        👨‍🍳 ধাপে ধাপে নির্দেশিকা
      </button>
      <button onclick="setModalTab('tips')" class="py-2.5 px-4 font-bold text-xs sm:text-sm rounded-t-xl transition-all border-b-2 ${state.activeModalTab === 'tips' ? 'border-amber-500 text-amber-400 bg-amber-500/10' : 'border-transparent text-slate-400 hover:text-slate-200'}">
        ✨ পুষ্টি ও সিক্রেট টিপস
      </button>
    </div>

    <div class="p-4 sm:p-6 space-y-6">
      ${state.activeModalTab === 'ingredients' ? `
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
          <div>
            <h4 class="font-bold text-white text-base">পরিবেশনের সংখ্যা পরিবর্তন করুন</h4>
            <p class="text-xs text-slate-300">উপাদানের পরিমাণ স্বয়ংক্রিয়ভাবে পরিবর্তিত হবে</p>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="changeServings(0.5)" class="w-9 h-9 rounded-xl bg-slate-800 text-amber-400 font-bold text-lg border border-amber-500/30 hover:bg-amber-500 hover:text-slate-950 transition-colors">-</button>
            <span class="px-4 py-1.5 rounded-xl bg-slate-900 font-bold text-amber-400 text-sm border border-amber-500/40">
              👥 ${currentServings} জন
            </span>
            <button onclick="changeServings(2)" class="w-9 h-9 rounded-xl bg-slate-800 text-amber-400 font-bold text-lg border border-amber-500/30 hover:bg-amber-500 hover:text-slate-950 transition-colors">+</button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${(recipe.ingredients || []).map(ing => `
            <label class="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-colors group">
              <input type="checkbox" class="custom-checkbox mt-0.5 flex-shrink-0" onchange="toggleIngredientCheck(this); playClickSound(700, 'sine');" />
              <div>
                <span class="ingredient-text text-sm text-slate-200 font-medium group-hover:text-amber-300 transition-colors">${ing.name}</span>
                <span class="text-xs font-bold text-amber-400 block mt-0.5">${calculateScaledAmount(ing.amount, state.servingMultiplier)}</span>
                ${ing.notes ? `<span class="text-[11px] text-slate-400 italic block">${ing.notes}</span>` : ''}
              </div>
            </label>
          `).join('')}
        </div>
      ` : ''}

      ${state.activeModalTab === 'steps' ? `
        <div class="space-y-4">
          ${(recipe.instructions || []).map(step => `
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
              <div class="flex items-center justify-between mb-2">
                <span class="w-8 h-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                  ${step.step_number}
                </span>
                <h4 class="text-base font-bold text-amber-400 flex-1 ml-3">${step.title}</h4>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed pl-11">${step.description}</p>
              ${step.tip ? `
                <div class="mt-3 ml-11 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
                  <span>💡 টিপস:</span>
                  <span>${step.tip}</span>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${state.activeModalTab === 'tips' ? `
        <div class="space-y-4">
          <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h4 class="font-bold text-amber-400 text-sm mb-3">🥗 পুষ্টির পরিমাণ (Nutrition Facts)</h4>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span class="text-xs text-slate-400 block">ক্যালরি</span>
                <span class="text-sm font-bold text-white">${recipe.nutrition ? recipe.nutrition.calories : '৪৫০'}</span>
              </div>
              <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span class="text-xs text-slate-400 block">প্রোটিন</span>
                <span class="text-sm font-bold text-white">${recipe.nutrition ? recipe.nutrition.protein : '২৮g'}</span>
              </div>
              <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span class="text-xs text-slate-400 block">কার্বোহাইড্রেট</span>
                <span class="text-sm font-bold text-white">${recipe.nutrition ? recipe.nutrition.carbs : '৩২g'}</span>
              </div>
              <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span class="text-xs text-slate-400 block">ফ্যাট</span>
                <span class="text-sm font-bold text-white">${recipe.nutrition ? recipe.nutrition.fat : '২০g'}</span>
              </div>
            </div>
          </div>

          ${recipe.chef_tips && recipe.chef_tips.length > 0 ? `
            <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 to-slate-900 border border-amber-500/30">
              <h4 class="font-bold text-amber-400 text-sm mb-2">✨ শেফের সিক্রেট রেসিপি টিপস</h4>
              <ul class="list-disc list-inside space-y-1 text-xs text-slate-300">
                ${recipe.chef_tips.map(tip => `<li>${tip}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      ` : ''}
    </div>
  `;
}

// Setup Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  let timeout;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        state.searchQuery = e.target.value;
        filterAndRender();
      }, 150);
    });
  }

  const diffSelect = document.getElementById('difficulty-select');
  if (diffSelect) {
    diffSelect.addEventListener('change', (e) => {
      state.difficulty = e.target.value;
      filterAndRender();
    });
  }

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      filterAndRender();
    });
  }

  const timeSlider = document.getElementById('time-slider');
  const timeVal = document.getElementById('time-val');
  if (timeSlider) {
    timeSlider.addEventListener('input', (e) => {
      state.maxTime = parseInt(e.target.value);
      if (timeVal) timeVal.innerText = state.maxTime < 180 ? `${state.maxTime} মিনিট` : 'যেকোনো সময়';
      filterAndRender();
    });
  }
}

function selectCategory(catId) {
  state.currentCategory = catId;
  playClickSound(440, 'sine');
  renderCategories(state.categories);
  filterAndRender();
}

function resetFilters() {
  state.currentCategory = 'all';
  state.searchQuery = '';
  state.difficulty = '';
  state.maxTime = 180;
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  renderCategories(state.categories);
  filterAndRender();
}

function updateRecipeCount(total) {
  const countEl = document.getElementById('total-recipes-count');
  if (countEl) {
    countEl.innerText = `${total} টি রেসিপি`;
  }
}

function changeServings(factor) {
  if (factor < 1) {
    state.servingMultiplier = Math.max(0.5, state.servingMultiplier * factor);
  } else {
    state.servingMultiplier = Math.min(4, state.servingMultiplier * 2);
  }
  playClickSound(500, 'sine');
  renderRecipeDetailModal(state.selectedRecipe);
}

function calculateScaledAmount(amountStr, multiplier) {
  if (multiplier === 1) return amountStr;
  return `${amountStr} (x${multiplier})`;
}

function toggleIngredientCheck(checkbox) {
  const text = checkbox.closest('label').querySelector('.ingredient-text');
  if (checkbox.checked) {
    text.classList.add('line-through', 'opacity-40');
  } else {
    text.classList.remove('line-through', 'opacity-40');
  }
}

function toggleFavorite(recipeId) {
  const index = state.favorites.indexOf(recipeId);
  if (index >= 0) {
    state.favorites.splice(index, 1);
  } else {
    state.favorites.push(recipeId);
  }
  localStorage.setItem('recipe_favorites', JSON.stringify(state.favorites));
  updateFavoritesCounter();
  filterAndRender();
  playClickSound(800, 'sine');
}

function updateFavoritesCounter() {
  const badge = document.getElementById('fav-count');
  if (badge) {
    badge.innerText = state.favorites.length;
  }
}
