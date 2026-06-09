export const ingredientCategories = [
  'Fillers & Carriers',
  'Preservatives',
  'Stabilizers & Thickeners',
  'Sweeteners',
  'Flavorings',
  'Colors & Dyes',
  'Emulsifiers',
  'Baking Additives'
];

const recipeLinks = {
  seasonings: ['ranch-seasoning', 'taco-seasoning', 'onion-soup-mix', 'hot-cocoa-mix'],
  sauces: ['homemade-ketchup', 'homemade-bbq-sauce', 'marinara-sauce', 'alfredo-sauce'],
  snacks: ['homemade-crackers', 'granola-bars', 'fruit-snacks', 'homemade-gummy-bears'],
  baking: ['sandwich-bread', 'homemade-cake-mix', 'homemade-brownie-mix', 'homemade-muffin-mix'],
  dairy: ['yogurt', 'greek-yogurt', 'cream-cheese', 'whipped-cream'],
  sweets: ['hot-cocoa-mix', 'chocolate-syrup', 'caramel-sauce', 'caramel-popcorn'],
  dressings: ['italian-dressing', 'honey-mustard', 'thousand-island-dressing', 'ranch-seasoning']
};

function makeIngredient({
  name,
  slug,
  category,
  summary,
  commonUses,
  source,
  typicalProducts,
  homemadeAlternatives,
  whatItIs,
  whyUsed,
  whereFound,
  finalThought,
  relatedRecipes = [],
  popular = false,
  recent = false
}) {
  return {
    name,
    slug,
    category,
    summary,
    commonUses,
    source,
    typicalProducts,
    homemadeAlternatives,
    whatItIs,
    whyUsed,
    whereFound,
    finalThought,
    relatedRecipes,
    popular,
    recent,
    seoTitle: `What Is ${name}? Uses in Food | Before the Box`,
    metaDescription: `${name} explained in plain language: what it is, why it is used in packaged foods, where it appears, and homemade alternatives.`
  };
}

export const ingredients = [
  makeIngredient({
    name: 'Maltodextrin',
    slug: 'maltodextrin',
    category: 'Fillers & Carriers',
    summary: 'Maltodextrin is a processed carbohydrate commonly used as a filler, thickener, and flavor carrier in packaged foods.',
    commonUses: 'Filler, carrier, mild thickener, texture helper',
    source: 'Usually corn, potato, rice, tapioca, or wheat starch',
    typicalProducts: 'Seasoning packets, drink mixes, chips, protein powders, coffee creamers',
    homemadeAlternatives: 'Direct replacement is usually unnecessary; use real spices, cocoa, sugar, flour, or cornstarch as needed.',
    whatItIs: [
      'Maltodextrin is a carbohydrate made by breaking down starch into shorter chains of sugars.',
      'It is usually sold as a fine white powder that dissolves easily and has very little flavor.',
      'Food companies use it because it can carry flavors, add bulk, and help powdered products flow more consistently.'
    ],
    whyUsed: ['Adds bulk without much flavor', 'Helps distribute flavors evenly', 'Improves powder texture', 'Can help thicken or stabilize packaged foods'],
    whereFound: ['Ranch packets', 'Taco seasoning', 'Hot cocoa mix', 'Coffee creamers', 'Protein powders', 'Crackers and chips'],
    finalThought: 'Maltodextrin is common and useful in manufacturing, but most homemade versions do not need it because they are made and used in smaller batches.',
    relatedRecipes: recipeLinks.seasonings,
    popular: true,
    recent: true
  }),
  makeIngredient({
    name: 'Natural Flavors',
    slug: 'natural-flavors',
    category: 'Flavorings',
    summary: 'Natural flavors are flavor compounds derived from plant or animal sources and used to create or boost taste.',
    commonUses: 'Flavor boosting, flavor consistency, aroma',
    source: 'Plant or animal source materials processed into flavor compounds',
    typicalProducts: 'Sauces, snacks, dressings, creamers, flavored drinks, desserts',
    homemadeAlternatives: 'Herbs, spices, citrus zest, vanilla, garlic, onion, cocoa, fruit, and extracts.',
    whatItIs: [
      'Natural flavors are ingredients created from natural source materials, but they are still processed into concentrated flavoring compounds.',
      'The label does not usually tell you which compounds are included, because flavor formulas can be proprietary.',
      'They are used to make foods taste consistent from batch to batch.'
    ],
    whyUsed: ['Strengthens flavor', 'Keeps packaged foods tasting consistent', 'Replaces flavor lost during processing', 'Adds aroma'],
    whereFound: ['Flavored crackers', 'Dressings', 'Sauces', 'Snack foods', 'Coffee creamers', 'Desserts'],
    finalThought: 'Natural flavors are not automatically a problem, but homemade recipes usually get flavor from recognizable ingredients.',
    relatedRecipes: [...recipeLinks.sauces, ...recipeLinks.dressings],
    popular: true,
    recent: true
  }),
  makeIngredient({
    name: 'Artificial Flavors',
    slug: 'artificial-flavors',
    category: 'Flavorings',
    summary: 'Artificial flavors are lab-made flavor compounds used to imitate or enhance specific tastes in packaged foods.',
    commonUses: 'Flavor consistency, flavor replacement, stronger taste',
    source: 'Synthetic flavor compounds',
    typicalProducts: 'Candy, snack foods, drink mixes, frostings, desserts',
    homemadeAlternatives: 'Vanilla, cocoa, fruit, spices, citrus, herbs, garlic, onion, and simple extracts.',
    whatItIs: [
      'Artificial flavors are flavoring compounds made synthetically rather than extracted from plant or animal sources.',
      'They can be designed to taste like fruit, vanilla, butter, smoke, or many other familiar flavors.',
      'Manufacturers use them when they want consistent flavor at scale.'
    ],
    whyUsed: ['Creates specific flavors', 'Costs less than some whole-food ingredients', 'Stays consistent during storage', 'Can withstand processing'],
    whereFound: ['Candy', 'Cake mixes', 'Frostings', 'Snack cakes', 'Drink mixes', 'Flavored crackers'],
    finalThought: 'Artificial flavors are a manufacturing tool. From-scratch recipes usually rely on whole ingredients for flavor instead.',
    relatedRecipes: ['vanilla-frosting', 'homemade-cake-mix', 'hot-cocoa-mix', 'chocolate-bark'],
    recent: true
  }),
  makeIngredient({
    name: 'Xanthan Gum',
    slug: 'xanthan-gum',
    category: 'Stabilizers & Thickeners',
    summary: 'Xanthan gum is a thickener and stabilizer that helps foods stay smooth and evenly mixed.',
    commonUses: 'Thickening, stabilizing, suspending ingredients',
    source: 'Made by fermenting sugars with bacteria, then drying the result into powder',
    typicalProducts: 'Dressings, sauces, gluten-free baked goods, ice cream, dairy alternatives',
    homemadeAlternatives: 'Flour, cornstarch, egg yolks, pectin, simmering, or blending.',
    whatItIs: [
      'Xanthan gum is made through fermentation and then processed into a powder.',
      'A tiny amount can thicken liquids and help ingredients stay suspended instead of separating.',
      'It is especially common in foods that need a smooth texture after shipping and storage.'
    ],
    whyUsed: ['Thickens sauces', 'Prevents separation', 'Improves mouthfeel', 'Helps gluten-free baked goods hold together'],
    whereFound: ['Salad dressings', 'Jarred sauces', 'Ice cream', 'Gluten-free baking mixes', 'Plant-based milks'],
    finalThought: 'Xanthan gum can be useful, but many homemade sauces thicken naturally with flour, cornstarch, eggs, or reduction.',
    relatedRecipes: [...recipeLinks.sauces, 'homemade-cornbread-mix'],
    popular: true
  }),
  makeIngredient({
    name: 'Guar Gum',
    slug: 'guar-gum',
    category: 'Stabilizers & Thickeners',
    summary: 'Guar gum is a plant-based thickener made from guar beans and used to improve texture.',
    commonUses: 'Thickening, stabilizing, moisture retention',
    source: 'Seeds of the guar plant',
    typicalProducts: 'Ice cream, sauces, dressings, baked goods, dairy alternatives',
    homemadeAlternatives: 'Flour, cornstarch, pectin, eggs, chia seeds, or natural reduction.',
    whatItIs: [
      'Guar gum comes from the seeds of the guar plant.',
      'It absorbs water and forms a thicker texture, which is why it appears in many creamy or pourable packaged foods.',
      'It is often used in very small amounts.'
    ],
    whyUsed: ['Thickens liquids', 'Improves creamy texture', 'Helps prevent separation', 'Can improve shelf stability'],
    whereFound: ['Ice cream', 'Yogurt products', 'Dressings', 'Sauces', 'Gluten-free mixes'],
    finalThought: 'Guar gum is a practical industrial thickener. Homemade recipes often use simpler thickeners or shorter storage times instead.',
    relatedRecipes: ['yogurt', 'italian-dressing', 'alfredo-sauce', 'homemade-muffin-mix']
  }),
  makeIngredient({
    name: 'Carrageenan',
    slug: 'carrageenan',
    category: 'Stabilizers & Thickeners',
    summary: 'Carrageenan is a seaweed-derived ingredient used to thicken and stabilize creamy foods.',
    commonUses: 'Stabilizing, thickening, improving creamy texture',
    source: 'Red seaweed',
    typicalProducts: 'Dairy alternatives, chocolate milk, creamers, processed dairy foods',
    homemadeAlternatives: 'Cream, egg yolks, gelatin, pectin, cornstarch, or blending.',
    whatItIs: [
      'Carrageenan is extracted from red seaweed and processed into a food additive.',
      'It helps liquids feel creamy and keeps ingredients from separating.',
      'It is often used in products that need to sit on shelves or travel without texture changes.'
    ],
    whyUsed: ['Creates creamy texture', 'Prevents separation', 'Stabilizes dairy and non-dairy products', 'Improves consistency'],
    whereFound: ['Coffee creamers', 'Chocolate milk', 'Plant-based milks', 'Whipped toppings', 'Processed dairy products'],
    finalThought: 'Carrageenan is used for texture and stability. Homemade dairy recipes usually rely on cream, milk, and shorter storage.',
    relatedRecipes: ['whipped-cream', 'yogurt', 'greek-yogurt', 'pudding-cups']
  }),
  makeIngredient({
    name: 'Modified Food Starch',
    slug: 'modified-food-starch',
    category: 'Stabilizers & Thickeners',
    summary: 'Modified food starch is starch that has been processed so it performs better as a thickener or stabilizer.',
    commonUses: 'Thickening, texture control, stability',
    source: 'Corn, potato, tapioca, wheat, or other starches',
    typicalProducts: 'Cream soups, sauces, dressings, puddings, seasoning packets',
    homemadeAlternatives: 'Flour, cornstarch, arrowroot, roux, egg yolks, or simmering.',
    whatItIs: [
      'Modified food starch begins as a normal starch, then is treated so it behaves in a specific way in packaged food.',
      'It may tolerate heat, freezing, acidity, or long storage better than regular starch.',
      'The word modified describes the starch processing, not genetic modification.'
    ],
    whyUsed: ['Thickens reliably', 'Holds texture during storage', 'Works in frozen or shelf-stable foods', 'Prevents watery separation'],
    whereFound: ['Cream soups', 'Jarred sauces', 'Puddings', 'Gravies', 'Seasoning packets'],
    finalThought: 'Modified food starch helps packaged foods stay consistent. Homemade versions can usually use flour, cornstarch, or a simple roux.',
    relatedRecipes: ['cream-of-chicken-soup', 'cream-of-mushroom-soup', 'cream-of-celery-soup', 'homemade-pudding-cups'],
    popular: true
  }),
  makeIngredient({
    name: 'Cellulose',
    slug: 'cellulose',
    category: 'Fillers & Carriers',
    summary: 'Cellulose is a plant fiber used in some packaged foods as a texture helper, anti-caking agent, or fiber source.',
    commonUses: 'Anti-caking, texture, fiber, moisture control',
    source: 'Plant fiber, often from wood pulp or cotton',
    typicalProducts: 'Shredded cheese, spice blends, baked goods, reduced-fat foods',
    homemadeAlternatives: 'Freshly grated cheese, real flour, oats, nuts, seeds, or no added filler.',
    whatItIs: [
      'Cellulose is a natural fiber found in plant cell walls.',
      'In food manufacturing, purified cellulose can be added to help with texture, moisture, or flow.',
      'It is often used in small amounts to keep products from clumping.'
    ],
    whyUsed: ['Prevents clumping', 'Adds fiber', 'Improves texture', 'Helps control moisture'],
    whereFound: ['Shredded cheese', 'Spice blends', 'Baked goods', 'Snack foods', 'Reduced-fat products'],
    finalThought: 'Cellulose is common in packaged foods, but homemade versions often skip it because freshness solves many of the same problems.',
    relatedRecipes: ['italian-seasoning', 'garlic-herb-seasoning', 'homemade-mozzarella', 'homemade-crackers']
  }),
  makeIngredient({
    name: 'Dextrose',
    slug: 'dextrose',
    category: 'Sweeteners',
    summary: 'Dextrose is a simple sugar, usually made from corn, used for sweetness, browning, and fermentation support.',
    commonUses: 'Sweetening, browning, fermentation, flavor balance',
    source: 'Usually corn starch',
    typicalProducts: 'Baked goods, cured meats, snack foods, drink mixes, seasoning blends',
    homemadeAlternatives: 'Sugar, honey, maple syrup, molasses, fruit, or no added sweetener.',
    whatItIs: [
      'Dextrose is chemically the same type of sugar as glucose.',
      'It is usually made from corn starch and appears as a fine powder.',
      'Because it dissolves quickly and behaves predictably, it is useful in processed foods.'
    ],
    whyUsed: ['Adds sweetness', 'Helps browning', 'Feeds yeast in some products', 'Balances salty or acidic flavors'],
    whereFound: ['Bread products', 'Snack foods', 'Seasoning mixes', 'Drink mixes', 'Cured meats'],
    finalThought: 'Dextrose is a simple sugar. Homemade recipes usually use sugar, honey, molasses, or fruit when sweetness is needed.',
    relatedRecipes: ['sandwich-bread', 'breakfast-sausage', 'hot-cocoa-mix', 'homemade-cake-mix']
  }),
  makeIngredient({
    name: 'Corn Syrup Solids',
    slug: 'corn-syrup-solids',
    category: 'Sweeteners',
    summary: 'Corn syrup solids are dried corn syrup used to add sweetness, bulk, and smooth texture to powdered foods.',
    commonUses: 'Sweetening, bulking, powder texture, flavor carrier',
    source: 'Corn starch processed into syrup and dried',
    typicalProducts: 'Coffee creamers, drink mixes, infant formulas, seasoning blends, desserts',
    homemadeAlternatives: 'Sugar, honey, maple syrup, cocoa, powdered milk, or simple dry mixes.',
    whatItIs: [
      'Corn syrup solids are made by drying corn syrup into a powder.',
      'They are easier to use in powdered products than liquid corn syrup.',
      'They can add sweetness, body, and smoothness.'
    ],
    whyUsed: ['Adds sweetness', 'Improves powdered texture', 'Carries flavors', 'Adds bulk'],
    whereFound: ['Coffee creamers', 'Hot cocoa mixes', 'Dessert mixes', 'Drink powders', 'Snack foods'],
    finalThought: 'Corn syrup solids are useful in dry packaged mixes, but homemade mixes can often use sugar, cocoa, powdered milk, and spices instead.',
    relatedRecipes: ['hot-cocoa-mix', 'homemade-cake-mix', 'homemade-brownie-mix', 'pancake-mix']
  }),
  makeIngredient({
    name: 'High Fructose Corn Syrup',
    slug: 'high-fructose-corn-syrup',
    category: 'Sweeteners',
    summary: 'High fructose corn syrup is a liquid sweetener made from corn and commonly used in drinks, sauces, and snacks.',
    commonUses: 'Sweetening, moisture retention, flavor balance',
    source: 'Corn starch converted into syrup with a higher fructose content',
    typicalProducts: 'Soda, ketchup, BBQ sauce, pancake syrup, candy, snack foods',
    homemadeAlternatives: 'Sugar, honey, maple syrup, molasses, fruit, or unsweetened versions.',
    whatItIs: [
      'High fructose corn syrup is made from corn starch that has been processed into a sweet liquid syrup.',
      'It is widely used because it is liquid, sweet, and easy for manufacturers to blend into foods.',
      'It appears most often in sweetened drinks, sauces, and packaged snacks.'
    ],
    whyUsed: ['Adds sweetness', 'Blends easily into liquids', 'Helps retain moisture', 'Balances acidity in sauces'],
    whereFound: ['Soda', 'Ketchup', 'BBQ sauce', 'Pancake syrup', 'Candy', 'Packaged snacks'],
    finalThought: 'High fructose corn syrup is a common sweetener. Homemade recipes let you choose the sweetener and amount.',
    relatedRecipes: ['homemade-ketchup', 'homemade-bbq-sauce', 'pancake-syrup', 'caramel-popcorn'],
    popular: true,
    recent: true
  }),
  makeIngredient({
    name: 'Potassium Sorbate',
    slug: 'potassium-sorbate',
    category: 'Preservatives',
    summary: 'Potassium sorbate is a preservative used to slow mold, yeast, and some bacteria in packaged foods.',
    commonUses: 'Mold and yeast control, shelf-life extension',
    source: 'Potassium salt of sorbic acid',
    typicalProducts: 'Cheese, dips, dressings, baked goods, sauces, dried fruit',
    homemadeAlternatives: 'Refrigeration, freezing, smaller batches, vinegar, salt, sugar, or proper canning methods.',
    whatItIs: [
      'Potassium sorbate is a preservative used in many foods that need to last longer.',
      'It is especially useful for slowing the growth of mold and yeast.',
      'It is often used in foods that contain moisture and would otherwise spoil more quickly.'
    ],
    whyUsed: ['Extends shelf life', 'Slows mold growth', 'Helps packaged foods stay stable', 'Reduces spoilage'],
    whereFound: ['Dressings', 'Dips', 'Cheese products', 'Baked goods', 'Sauces', 'Dried fruit'],
    finalThought: 'Potassium sorbate is used for shelf life. Homemade recipes often rely on refrigeration, freezing, or making smaller batches.',
    relatedRecipes: ['italian-dressing', 'homemade-ketchup', 'cream-cheese', 'granola-bars'],
    popular: true
  }),
  makeIngredient({
    name: 'Sodium Benzoate',
    slug: 'sodium-benzoate',
    category: 'Preservatives',
    summary: 'Sodium benzoate is a preservative often used in acidic foods and drinks to slow microbial growth.',
    commonUses: 'Preservation in acidic foods',
    source: 'Sodium salt of benzoic acid',
    typicalProducts: 'Soda, salad dressings, pickles, sauces, fruit drinks',
    homemadeAlternatives: 'Vinegar, lemon juice, refrigeration, freezing, or small-batch preparation.',
    whatItIs: [
      'Sodium benzoate is a preservative that works best in acidic foods.',
      'It helps slow the growth of yeasts, molds, and some bacteria.',
      'Manufacturers use it when products need to sit on shelves or in refrigerators for longer periods.'
    ],
    whyUsed: ['Extends shelf life', 'Works well in acidic products', 'Helps prevent spoilage', 'Keeps flavor more consistent over time'],
    whereFound: ['Soda', 'Fruit drinks', 'Pickles', 'Dressings', 'Ketchup', 'Sauces'],
    finalThought: 'Sodium benzoate serves a preservation role. Homemade acidic foods are usually made in smaller batches and stored cold.',
    relatedRecipes: ['homemade-ketchup', 'italian-dressing', 'taco-sauce', 'homemade-bbq-sauce']
  }),
  makeIngredient({
    name: 'Calcium Propionate',
    slug: 'calcium-propionate',
    category: 'Preservatives',
    summary: 'Calcium propionate is a preservative commonly used in bread and baked goods to slow mold growth.',
    commonUses: 'Mold prevention in baked goods',
    source: 'Calcium salt of propionic acid',
    typicalProducts: 'Sandwich bread, buns, tortillas, baked goods',
    homemadeAlternatives: 'Fresh baking, freezing, refrigeration, sourdough fermentation, or smaller batches.',
    whatItIs: [
      'Calcium propionate is used mainly in baked goods.',
      'It helps slow mold growth so bread and buns last longer on shelves.',
      'It is useful for commercial bread because products may spend days in transit and storage.'
    ],
    whyUsed: ['Extends bread shelf life', 'Slows mold', 'Supports large-scale distribution', 'Helps reduce waste'],
    whereFound: ['Sandwich bread', 'Hamburger buns', 'Hot dog buns', 'Tortillas', 'Packaged baked goods'],
    finalThought: 'Calcium propionate helps commercial bread last longer. Homemade bread can be frozen or made in smaller batches instead.',
    relatedRecipes: ['sandwich-bread', 'hamburger-buns', 'hot-dog-buns', 'flour-tortillas'],
    popular: true
  }),
  makeIngredient({
    name: 'Citric Acid',
    slug: 'citric-acid',
    category: 'Preservatives',
    summary: 'Citric acid is an acid commonly used to add tartness, control acidity, and help preserve foods.',
    commonUses: 'Acidity control, tart flavor, preservation, cheese making',
    source: 'Often produced by fermentation; naturally found in citrus fruits',
    typicalProducts: 'Canned foods, sauces, drinks, candy, cheese making kits',
    homemadeAlternatives: 'Lemon juice, vinegar, fermentation, or recipe-specific acids.',
    whatItIs: [
      'Citric acid naturally occurs in citrus fruits, but most commercial citric acid is produced through fermentation.',
      'It has a tart taste and can lower the pH of foods.',
      'It is used both for flavor and for controlling acidity.'
    ],
    whyUsed: ['Adds tartness', 'Controls acidity', 'Helps preservation', 'Supports cheese making'],
    whereFound: ['Canned tomatoes', 'Candy', 'Drinks', 'Sauces', 'Mozzarella recipes'],
    finalThought: 'Citric acid is a practical acidity tool. In home cooking, lemon juice or vinegar can sometimes serve a similar purpose.',
    relatedRecipes: ['mozzarella', 'homemade-ketchup', 'enchilada-sauce', 'fruit-snacks']
  }),
  makeIngredient({
    name: 'Ascorbic Acid',
    slug: 'ascorbic-acid',
    category: 'Preservatives',
    summary: 'Ascorbic acid is vitamin C used in foods as an antioxidant and dough improver.',
    commonUses: 'Antioxidant, color protection, dough strengthening',
    source: 'Vitamin C, commercially produced for food use',
    typicalProducts: 'Fruit products, breads, cured foods, drinks',
    homemadeAlternatives: 'Lemon juice, fresh preparation, refrigeration, or freezing.',
    whatItIs: [
      'Ascorbic acid is another name for vitamin C.',
      'In packaged foods, it is often used to slow oxidation, which can affect color and flavor.',
      'In bread making, it can also help dough strength.'
    ],
    whyUsed: ['Protects color', 'Slows oxidation', 'Supports bread texture', 'Helps maintain freshness'],
    whereFound: ['Fruit snacks', 'Juices', 'Bread products', 'Cured meats', 'Prepared fruits'],
    finalThought: 'Ascorbic acid can help preserve freshness. Homemade foods often rely on fresh prep, lemon juice, or cold storage.',
    relatedRecipes: ['fruit-snacks', 'fruit-leather', 'sandwich-bread', 'homemade-applesauce']
  }),
  makeIngredient({
    name: 'Lecithin',
    slug: 'lecithin',
    category: 'Emulsifiers',
    summary: 'Lecithin is an emulsifier that helps oil and water blend together in foods.',
    commonUses: 'Emulsifying, texture, preventing separation',
    source: 'Often soy or sunflower; also naturally present in egg yolks',
    typicalProducts: 'Chocolate, dressings, baked goods, mayonnaise, spreads',
    homemadeAlternatives: 'Egg yolks, mustard, honey, blending, or shaking just before serving.',
    whatItIs: [
      'Lecithin is a fatty substance that helps ingredients mix together.',
      'It can come from soy, sunflower, eggs, or other sources.',
      'Food companies use it when oil and water need to stay blended.'
    ],
    whyUsed: ['Keeps mixtures smooth', 'Prevents separation', 'Improves chocolate texture', 'Helps baked goods stay consistent'],
    whereFound: ['Chocolate chips', 'Dressings', 'Mayonnaise', 'Baked goods', 'Spreads'],
    finalThought: 'Lecithin is an emulsifier. Homemade recipes often use egg yolks, mustard, or simple shaking to get the same effect.',
    relatedRecipes: ['homemade-mayonnaise', 'italian-dressing', 'chocolate-bark', 'homemade-cookie-dough'],
    recent: true
  }),
  makeIngredient({
    name: 'Pectin',
    slug: 'pectin',
    category: 'Stabilizers & Thickeners',
    summary: 'Pectin is a plant fiber used to thicken jams, jellies, fruit snacks, and some dairy products.',
    commonUses: 'Gelling, thickening, stabilizing',
    source: 'Fruit peels and pulp, especially apples and citrus',
    typicalProducts: 'Jams, jellies, fruit snacks, yogurt, gummies',
    homemadeAlternatives: 'Fruit pectin, chia seeds, gelatin, cornstarch, or natural reduction.',
    whatItIs: [
      'Pectin is a natural fiber found in fruits.',
      'When combined with the right balance of sugar and acid, it can form a gel.',
      'It is common in fruit-based foods that need a thicker texture.'
    ],
    whyUsed: ['Creates gel texture', 'Thickens fruit mixtures', 'Stabilizes yogurt', 'Improves mouthfeel'],
    whereFound: ['Jam', 'Jelly', 'Fruit snacks', 'Yogurt', 'Gummies'],
    finalThought: 'Pectin is one of the more familiar thickeners because home cooks use it too. It is especially useful for fruit-based recipes.',
    relatedRecipes: ['fruit-snacks', 'homemade-gummy-bears', 'yogurt', 'homemade-applesauce']
  }),
  makeIngredient({
    name: 'Sucralose',
    slug: 'sucralose',
    category: 'Sweeteners',
    summary: 'Sucralose is a high-intensity artificial sweetener used to add sweetness with little or no sugar.',
    commonUses: 'Low-calorie sweetening',
    source: 'Artificial sweetener made from chemically modified sugar',
    typicalProducts: 'Diet drinks, sugar-free sauces, protein powders, low-sugar desserts',
    homemadeAlternatives: 'Sugar, honey, maple syrup, fruit, stevia, or simply less sweetener.',
    whatItIs: [
      'Sucralose is an artificial sweetener that tastes much sweeter than sugar.',
      'Because so little is needed, it is used in low-sugar or sugar-free products.',
      'It is often paired with bulking ingredients because it does not behave like sugar in recipes.'
    ],
    whyUsed: ['Adds sweetness without much sugar', 'Works in low-calorie foods', 'Stays stable in many products', 'Reduces added sugar on labels'],
    whereFound: ['Diet drinks', 'Protein powders', 'Sugar-free syrups', 'Low-sugar desserts', 'Snack products'],
    finalThought: 'Sucralose is used when manufacturers want sweetness without sugar. Homemade recipes let you decide whether sweetness, less sweetness, or a different sweetener fits best.',
    relatedRecipes: ['pancake-syrup', 'hot-cocoa-mix', 'chia-pudding', 'homemade-pudding-cups']
  }),
  makeIngredient({
    name: 'Aspartame',
    slug: 'aspartame',
    category: 'Sweeteners',
    summary: 'Aspartame is a high-intensity artificial sweetener used in many diet and sugar-free foods.',
    commonUses: 'Low-calorie sweetening',
    source: 'Artificial sweetener made from amino acid components',
    typicalProducts: 'Diet soda, sugar-free drink mixes, gum, low-calorie desserts',
    homemadeAlternatives: 'Sugar, honey, maple syrup, fruit, stevia, monk fruit, or less sweetener.',
    whatItIs: [
      'Aspartame is an artificial sweetener that is much sweeter than sugar.',
      'It is used in foods and drinks where manufacturers want sweetness with fewer calories.',
      'It is most common in beverages and products that are not heavily heated.'
    ],
    whyUsed: ['Adds sweetness with very little quantity', 'Reduces sugar content', 'Supports diet or low-calorie products', 'Blends well in beverages'],
    whereFound: ['Diet soda', 'Sugar-free drink mixes', 'Chewing gum', 'Low-calorie desserts'],
    finalThought: 'Aspartame is a sweetening option in packaged foods. Homemade recipes can use traditional sweeteners or less sweetness depending on your goals.',
    relatedRecipes: ['hot-cocoa-mix', 'pancake-syrup', 'chocolate-syrup', 'fruit-snacks']
  }),
  makeIngredient({
    name: 'Stevia',
    slug: 'stevia',
    category: 'Sweeteners',
    summary: 'Stevia is a plant-derived high-intensity sweetener used in low-sugar and sugar-free foods.',
    commonUses: 'Low-calorie sweetening',
    source: 'Stevia plant leaves, processed into sweet compounds',
    typicalProducts: 'Low-sugar drinks, protein products, desserts, tabletop sweeteners',
    homemadeAlternatives: 'Sugar, honey, maple syrup, fruit, or less sweetener.',
    whatItIs: [
      'Stevia sweeteners come from compounds found in the stevia plant.',
      'They are much sweeter than sugar, so only small amounts are needed.',
      'Packaged foods may use stevia alone or blended with other sweeteners.'
    ],
    whyUsed: ['Adds sweetness with little or no sugar', 'Works in low-calorie products', 'Appeals to people seeking plant-derived sweeteners', 'Reduces added sugar'],
    whereFound: ['Low-sugar drinks', 'Protein powders', 'Desserts', 'Tabletop sweeteners', 'Snack bars'],
    finalThought: 'Stevia can be useful for low-sugar goals. In homemade recipes, it is one option among many sweeteners.',
    relatedRecipes: ['chia-pudding', 'hot-cocoa-mix', 'pancake-syrup', 'energy-bites']
  }),
  makeIngredient({
    name: 'Monk Fruit',
    slug: 'monk-fruit',
    category: 'Sweeteners',
    summary: 'Monk fruit sweetener is made from monk fruit extract and used to sweeten foods with little or no sugar.',
    commonUses: 'Low-calorie sweetening',
    source: 'Monk fruit extract, often blended with bulking sweeteners',
    typicalProducts: 'Low-sugar drinks, desserts, baking blends, protein snacks',
    homemadeAlternatives: 'Sugar, honey, maple syrup, fruit, or less sweetener.',
    whatItIs: [
      'Monk fruit sweetener comes from sweet compounds found in monk fruit.',
      'Because the extract is very sweet, packaged versions are often blended with other ingredients to make measuring easier.',
      'It is common in low-sugar products.'
    ],
    whyUsed: ['Adds sweetness with little or no sugar', 'Works in reduced-sugar products', 'Can be used in baking blends', 'Appeals to people seeking alternative sweeteners'],
    whereFound: ['Low-sugar desserts', 'Protein snacks', 'Drink mixes', 'Baking blends', 'Tabletop sweeteners'],
    finalThought: 'Monk fruit is one sweetener option. Homemade cooking gives you room to choose the sweetener and amount that fits the recipe.',
    relatedRecipes: ['homemade-brownie-mix', 'hot-cocoa-mix', 'chocolate-syrup', 'energy-bites']
  }),
  makeIngredient({
    name: 'Yellow 5',
    slug: 'yellow-5',
    category: 'Colors & Dyes',
    summary: 'Yellow 5 is a synthetic food dye used to create a bright yellow color in packaged foods.',
    commonUses: 'Artificial coloring',
    source: 'Synthetic dye',
    typicalProducts: 'Candy, drink mixes, snacks, cereals, desserts',
    homemadeAlternatives: 'Turmeric, saffron, carrot, squash, egg yolks, or no added color.',
    whatItIs: [
      'Yellow 5 is a synthetic color additive used to make foods look bright yellow.',
      'It does not add flavor or nutrition; its job is appearance.',
      'Manufacturers use it when they want a consistent color from batch to batch.'
    ],
    whyUsed: ['Creates bright color', 'Keeps products visually consistent', 'Replaces color lost during processing', 'Supports brand appearance'],
    whereFound: ['Candy', 'Drink mixes', 'Snack foods', 'Cereal', 'Desserts'],
    finalThought: 'Yellow 5 is used for appearance. Homemade foods usually do not need added color, though spices and whole foods can add natural color.',
    relatedRecipes: ['homemade-gummy-bears', 'fruit-snacks', 'homemade-popsicles', 'homemade-cake-mix']
  }),
  makeIngredient({
    name: 'Red 40',
    slug: 'red-40',
    category: 'Colors & Dyes',
    summary: 'Red 40 is a synthetic food dye used to create red, pink, and orange tones in packaged foods.',
    commonUses: 'Artificial coloring',
    source: 'Synthetic dye',
    typicalProducts: 'Candy, fruit snacks, drinks, cereals, frostings',
    homemadeAlternatives: 'Beet juice, berry puree, pomegranate juice, paprika, or no added color.',
    whatItIs: [
      'Red 40 is a synthetic dye widely used in packaged foods.',
      'It is added for color, not for flavor.',
      'It helps manufacturers create consistent red or pink coloring across large batches.'
    ],
    whyUsed: ['Creates bright red color', 'Makes products visually consistent', 'Improves appearance after processing', 'Supports flavor cues like berry or cherry'],
    whereFound: ['Fruit snacks', 'Candy', 'Sports drinks', 'Frosting', 'Cereal'],
    finalThought: 'Red 40 is a color additive. Homemade versions can use fruit-based color or skip added color entirely.',
    relatedRecipes: ['fruit-snacks', 'homemade-gummy-bears', 'vanilla-frosting', 'homemade-popsicles'],
    popular: true
  }),
  makeIngredient({
    name: 'Blue 1',
    slug: 'blue-1',
    category: 'Colors & Dyes',
    summary: 'Blue 1 is a synthetic food dye used to create blue and green shades in packaged foods.',
    commonUses: 'Artificial coloring',
    source: 'Synthetic dye',
    typicalProducts: 'Candy, drinks, frostings, cereals, snack foods',
    homemadeAlternatives: 'Blueberry, butterfly pea flower, spirulina, or no added color.',
    whatItIs: [
      'Blue 1 is a synthetic dye used when foods need a bright blue color.',
      'It may also be combined with yellow dyes to create green shades.',
      'Like other food dyes, its purpose is visual consistency.'
    ],
    whyUsed: ['Adds bright color', 'Supports brand appearance', 'Creates blue or green shades', 'Keeps color consistent'],
    whereFound: ['Candy', 'Frosting', 'Drink mixes', 'Cereal', 'Snack foods'],
    finalThought: 'Blue 1 is about appearance. Homemade foods can use natural color sources or simply focus on flavor.',
    relatedRecipes: ['vanilla-frosting', 'homemade-gummy-bears', 'fruit-snacks', 'homemade-popsicles']
  }),
  makeIngredient({
    name: 'Smoke Flavoring',
    slug: 'smoke-flavoring',
    category: 'Flavorings',
    summary: 'Smoke flavoring adds smoky taste to foods without traditional smoking.',
    commonUses: 'Smoky flavor, flavor consistency',
    source: 'Often made by condensing smoke into liquid smoke or creating smoke-like flavor compounds',
    typicalProducts: 'BBQ sauce, meats, snack foods, seasonings, marinades',
    homemadeAlternatives: 'Smoked paprika, real smoking, toasted spices, charred vegetables, or slow cooking.',
    whatItIs: [
      'Smoke flavoring is used to give foods a smoky taste.',
      'Some smoke flavoring comes from actual smoke that is captured and condensed into liquid smoke.',
      'Other products may use flavor blends to create a similar effect.'
    ],
    whyUsed: ['Adds smoky flavor', 'Avoids traditional smoking time', 'Keeps flavor consistent', 'Works in sauces and seasonings'],
    whereFound: ['BBQ sauce', 'Bacon-flavored snacks', 'Seasonings', 'Marinades', 'Processed meats'],
    finalThought: 'Smoke flavoring is a shortcut for smoky taste. Homemade recipes can use smoked paprika, real smoke, or a simpler flavor profile.',
    relatedRecipes: ['homemade-bbq-sauce', 'breakfast-sausage', 'burger-seasoning', 'blackening-seasoning']
  }),
  makeIngredient({
    name: 'Yeast Extract',
    slug: 'yeast-extract',
    category: 'Flavorings',
    summary: 'Yeast extract is a savory flavor ingredient used to add umami depth to packaged foods.',
    commonUses: 'Savory flavor, umami, flavor enhancement',
    source: 'Yeast cells broken down into concentrated flavor components',
    typicalProducts: 'Soups, broths, snack foods, sauces, seasoning blends',
    homemadeAlternatives: 'Broth, mushrooms, tomato paste, soy sauce, parmesan, herbs, and slow cooking.',
    whatItIs: [
      'Yeast extract is made by breaking down yeast cells and concentrating their savory components.',
      'It has a rich, umami flavor and is used to make foods taste more savory.',
      'It is common in packaged foods where manufacturers want depth without long cooking.'
    ],
    whyUsed: ['Adds savory flavor', 'Boosts umami', 'Helps replace flavor from slow cooking', 'Works in dry mixes and sauces'],
    whereFound: ['Soup mixes', 'Broths', 'Chips', 'Seasoning blends', 'Sauces'],
    finalThought: 'Yeast extract is used for flavor depth. Homemade food can build similar depth with broth, aromatics, herbs, and time.',
    relatedRecipes: ['onion-soup-mix', 'cream-of-chicken-soup', 'rice-pilaf-mix', 'marinara-sauce'],
    recent: true
  })
].sort((a, b) => a.name.localeCompare(b.name));

export function getIngredientBySlug(slug) {
  return ingredients.find((ingredient) => ingredient.slug === slug);
}
