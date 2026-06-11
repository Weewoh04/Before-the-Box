import { getMarkdownRecipes } from './markdown-recipes';
import { withRecipeImages } from './recipe-images';

const starterRecipes = [];

const recipeMap = new Map();

for (const recipe of [...starterRecipes, ...getMarkdownRecipes()]) {
  recipeMap.set(recipe.slug, recipe.imageMetadata ? recipe : withRecipeImages(recipe));
}

export const recipes = [...recipeMap.values()];

export const recipeImagePrompts = Object.fromEntries(
  recipes.map((recipe) => [recipe.slug, recipe.imagePrompt])
);

export const recipeImageManifest = recipes.map((recipe) => ({
  title: recipe.title,
  slug: recipe.slug,
  imagePrompt: recipe.imagePrompt,
  heroImage: recipe.heroImage,
  pinterestImage: recipe.pinterestImage,
  pinterestGeneratedImage: recipe.pinterestGeneratedImage,
  ingredientImage: recipe.ingredientImage,
  ogImage: recipe.ogImage,
  ogGeneratedImage: recipe.ogGeneratedImage,
  alt: recipe.imageAlt
}));

export function categorySlug(category) {
  return category
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const categories = [
  { icon: 'Dairy', title: 'Dairy', description: 'Butter, yogurt, cream cheese, sour cream, ricotta, mozzarella, and fresh dairy basics.' },
  { icon: 'Bread', title: 'Bread & Baking', description: 'Bread, buns, tortillas, biscuits, pizza dough, crackers, and baking basics.' },
  { icon: 'Breakfast', title: 'Breakfast', description: 'Pancake mix, waffle mix, and simple morning staples made ahead.' },
  { icon: 'Pantry', title: 'Pantry Staples', description: 'Seasoning blends, baking staples, sugars, flour mixes, and cozy pantry swaps.' },
  { icon: 'Sauce', title: 'Condiments & Sauces', description: 'Mayonnaise, ketchup, dressings, taco sauce, marinara, BBQ sauce, and jarred swaps.' },
  { icon: 'Kids', title: 'Kids Snacks', description: 'Applesauce, fruit snacks, granola bars, pudding cups, popsicles, and lunchbox swaps.' },
  { icon: 'Snack', title: 'Snacks', description: 'Crackers, quick bites, and simple snack staples.' },
  { icon: 'Clean', title: 'Home + Cleaning', description: 'Laundry powder, sprays, dish tabs, and practical household recipes.' },
  { icon: 'Care', title: 'Beauty + Body', description: 'Lip balm, tallow balm, sugar scrubs, dry shampoo, and body care.' }
].map((category) => ({ ...category, slug: categorySlug(category.title) }));

export function getCategoryBySlug(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getRecipesByCategory(categoryTitle) {
  return recipes.filter((recipe) => recipe.category === categoryTitle);
}
