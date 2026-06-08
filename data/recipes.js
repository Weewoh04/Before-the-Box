import { getMarkdownRecipes } from './markdown-recipes';

const starterRecipes = [];

const recipeMap = new Map();

for (const recipe of [...starterRecipes, ...getMarkdownRecipes()]) {
  recipeMap.set(recipe.slug, recipe);
}

export const recipes = [...recipeMap.values()];

export const categories = [
  { icon: 'Dairy', title: 'Dairy', description: 'Butter, yogurt, cream cheese, sour cream, ricotta, mozzarella, and fresh dairy basics.' },
  { icon: 'Pantry', title: 'Pantry Staples', description: 'Seasoning blends, baking staples, sugars, flour mixes, and cozy pantry swaps.' },
  { icon: 'Butter', title: 'Kitchen Staples', description: 'Butter, yogurt, broth, mayo, sour cream, and everyday basics.' },
  { icon: 'Bread', title: 'Baking Basics', description: 'Bread, tortillas, biscuits, crackers, pizza dough, and mixes.' },
  { icon: 'Jar', title: 'Pantry Swaps', description: 'Seasonings, sauces, dressings, creamers, and packet replacements.' },
  { icon: 'Snack', title: 'Kids Snacks', description: 'Fruit leather, granola bars, gummies, popsicles, and lunchbox swaps.' },
  { icon: 'Clean', title: 'Home + Cleaning', description: 'Laundry powder, sprays, dish tabs, and practical household recipes.' },
  { icon: 'Care', title: 'Beauty + Body', description: 'Lip balm, tallow balm, sugar scrubs, dry shampoo, and body care.' }
];
