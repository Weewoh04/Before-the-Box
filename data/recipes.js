import { getMarkdownRecipes } from './markdown-recipes';

const starterRecipes = [
  {
    slug: 'mason-jar-butter',
    title: 'Mason Jar Butter',
    category: 'Kitchen Staples',
    summary: 'One ingredient, ten minutes, and a jar. This is the easiest from-scratch win.',
    time: '10 minutes',
    difficulty: 'Beginner',
    yield: 'About 1/2 cup',
    ingredients: ['1 cup cold heavy whipping cream', 'Optional: pinch of salt'],
    equipment: ['Pint mason jar with lid', 'Fine mesh strainer', 'Bowl', 'Cold water'],
    steps: [
      'Pour heavy cream into a clean mason jar, filling it no more than halfway.',
      'Seal the lid tightly and shake hard until the cream turns to whipped cream, then separates into butter and buttermilk.',
      'Strain off the buttermilk and save it for biscuits, pancakes, or baking.',
      'Rinse the butter under very cold water, pressing gently until the water runs mostly clear.',
      'Add salt if desired, shape, and refrigerate.'
    ],
    storage: 'Store covered in the refrigerator for up to 1 week.',
    homemade: 'Heavy cream, salt if desired.',
    storeBought: 'Often includes cream, natural flavors, color, or added salt depending on brand.',
    pinterestText: 'Make butter in a mason jar with 1 ingredient in about 10 minutes.'
  },
  {
    slug: 'homemade-taco-seasoning',
    title: 'Homemade Taco Seasoning',
    category: 'Pantry Swaps',
    summary: 'A quick packet-free seasoning blend for tacos, chicken, soups, and skillet meals.',
    time: '5 minutes',
    difficulty: 'Beginner',
    yield: 'About 1/2 cup',
    ingredients: ['2 tbsp chili powder', '1 tbsp cumin', '1 tbsp paprika', '1 tsp garlic powder', '1 tsp onion powder', '1 tsp oregano', '1 tsp salt', '1/2 tsp black pepper'],
    equipment: ['Small bowl', 'Spoon', 'Spice jar'],
    steps: ['Mix all spices together.', 'Store in an airtight jar.', 'Use 2 to 3 tablespoons per pound of meat.'],
    storage: 'Store in a cool, dry pantry for up to 6 months.',
    homemade: 'Spices and salt only.',
    storeBought: 'Some packets include anti-caking agents, sugar, starches, or preservatives.',
    pinterestText: 'Skip the packet and make taco seasoning from pantry spices.'
  },
  {
    slug: 'quick-ranch-mix',
    title: 'Quick Ranch Mix',
    category: 'Pantry Swaps',
    summary: 'A dry ranch mix for dips, dressing, chicken, potatoes, and snack crackers.',
    time: '5 minutes',
    difficulty: 'Beginner',
    yield: 'About 3/4 cup',
    ingredients: ['1/2 cup dried parsley', '1 tbsp dried dill', '1 tbsp garlic powder', '1 tbsp onion powder', '1 tsp dried chives', '1 tsp salt', '1/2 tsp pepper'],
    equipment: ['Small bowl', 'Whisk', 'Airtight jar'],
    steps: ['Whisk everything together.', 'Store in an airtight jar.', 'For dip, stir 1 tablespoon mix into 1/2 cup sour cream or Greek yogurt.'],
    storage: 'Store in a dry pantry for up to 6 months.',
    homemade: 'Herbs, spices, and salt.',
    storeBought: 'Packets may include maltodextrin, MSG, modified food starch, or preservatives.',
    pinterestText: 'Homemade ranch mix for dips, dressings, and easy dinners.'
  }
];

const recipeMap = new Map();

for (const recipe of [...starterRecipes, ...getMarkdownRecipes()]) {
  recipeMap.set(recipe.slug, recipe);
}

export const recipes = [...recipeMap.values()];

export const categories = [
  { icon: 'Butter', title: 'Kitchen Staples', description: 'Butter, yogurt, broth, mayo, sour cream, and everyday basics.' },
  { icon: 'Bread', title: 'Baking Basics', description: 'Bread, tortillas, biscuits, crackers, pizza dough, and mixes.' },
  { icon: 'Jar', title: 'Pantry Swaps', description: 'Seasonings, sauces, dressings, creamers, and packet replacements.' },
  { icon: 'Snack', title: 'Kids Snacks', description: 'Fruit leather, granola bars, gummies, popsicles, and lunchbox swaps.' },
  { icon: 'Clean', title: 'Home + Cleaning', description: 'Laundry powder, sprays, dish tabs, and practical household recipes.' },
  { icon: 'Care', title: 'Beauty + Body', description: 'Lip balm, tallow balm, sugar scrubs, dry shampoo, and body care.' }
];
