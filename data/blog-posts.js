function item(text, slug) {
  return slug ? { text, href: `/recipes/${slug}` } : { text };
}

export const blogPosts = [
  {
    title: '100 Things You Can Make Before the Box',
    slug: '100-things-you-can-make-before-the-box',
    category: 'Beginner Guides',
    excerpt: 'A complete list of pantry staples, sauces, snacks, breads, and everyday foods you can make from scratch instead of buying prepackaged.',
    featuredImage: '/images/blog/100-things-you-can-make-before-the-box.jpg',
    pinterestTitle: '100 Things You Can Make Before the Box',
    intro: [
      'Make the thing. Skip the label.',
      "If you've ever looked at an ingredient label and wondered why there are 27 ingredients in something that should only have 4, you're not alone.",
      "The good news? You don't have to learn everything overnight.",
      'Many of the foods and household staples we buy every week can be made right at home using simple ingredients and basic kitchen tools.',
      "Here's your ultimate Before the Box checklist."
    ],
    sections: [
      {
        id: 'dairy',
        title: 'Dairy',
        items: [
          item('Butter', 'butter'),
          item('Buttermilk', 'buttermilk'),
          item('Whipped Cream', 'whipped-cream'),
          item('Yogurt', 'yogurt'),
          item('Greek Yogurt', 'greek-yogurt'),
          item('Cream Cheese', 'cream-cheese'),
          item('Sour Cream', 'sour-cream'),
          item('Cottage Cheese', 'cottage-cheese'),
          item('Ricotta Cheese', 'ricotta-cheese'),
          item('Mozzarella', 'mozzarella')
        ]
      },
      {
        id: 'bread-and-baking',
        title: 'Bread & Baking',
        items: [
          item('Sandwich Bread', 'sandwich-bread'),
          item('Hamburger Buns', 'hamburger-buns'),
          item('Hot Dog Buns', 'hot-dog-buns'),
          item('Flour Tortillas', 'flour-tortillas'),
          item('Corn Tortillas', 'corn-tortillas'),
          item('Pizza Dough', 'pizza-dough'),
          item('Biscuits', 'buttermilk-biscuits'),
          item('Pancake Mix', 'pancake-mix'),
          item('Waffle Mix', 'waffle-mix'),
          item('Crackers', 'homemade-crackers')
        ]
      },
      {
        id: 'pantry-staples',
        title: 'Pantry Staples',
        items: [
          item('Taco Seasoning', 'taco-seasoning'),
          item('Ranch Seasoning', 'ranch-seasoning'),
          item('Onion Soup Mix', 'onion-soup-mix'),
          item('Italian Seasoning', 'italian-seasoning'),
          item('Brown Sugar', 'brown-sugar'),
          item('Powdered Sugar', 'powdered-sugar'),
          item('Self-Rising Flour', 'self-rising-flour'),
          item('Hot Cocoa Mix', 'hot-cocoa-mix'),
          item('Vanilla Extract'),
          item('Chicken Broth')
        ]
      },
      {
        id: 'sauces-and-condiments',
        title: 'Sauces & Condiments',
        items: [
          item('Mayonnaise', 'homemade-mayonnaise'),
          item('Ketchup', 'homemade-ketchup'),
          item('BBQ Sauce', 'homemade-bbq-sauce'),
          item('Honey Mustard', 'honey-mustard'),
          item('Italian Dressing', 'italian-dressing'),
          item('Thousand Island Dressing', 'thousand-island-dressing'),
          item('Enchilada Sauce', 'enchilada-sauce'),
          item('Marinara Sauce', 'marinara-sauce'),
          item('Taco Sauce', 'taco-sauce'),
          item('Alfredo Sauce', 'alfredo-sauce')
        ]
      },
      {
        id: 'breakfast-foods',
        title: 'Breakfast Foods',
        items: [
          item('Granola', 'homemade-granola'),
          item('Oatmeal Packets', 'instant-oatmeal-packets'),
          item('Pancake Syrup', 'pancake-syrup'),
          item('Breakfast Sausage', 'breakfast-sausage'),
          item('Chia Pudding', 'chia-pudding'),
          item('Breakfast Burritos', 'breakfast-burritos'),
          item('Breakfast Sandwiches', 'breakfast-sandwiches'),
          item('Hash Browns', 'homemade-hash-browns'),
          item('Granola Clusters', 'cereal-clusters'),
          item('Waffle Mix', 'waffle-mix')
        ]
      },
      {
        id: 'snacks',
        title: 'Snacks',
        items: [
          item('Applesauce', 'homemade-applesauce'),
          item('Fruit Leather', 'fruit-leather'),
          item('Fruit Snacks', 'fruit-snacks'),
          item('Granola Bars', 'granola-bars'),
          item('Pudding Cups', 'pudding-cups'),
          item('Popsicles', 'homemade-popsicles'),
          item('Cheese Crackers', 'cheese-crackers'),
          item('Graham Crackers', 'graham-crackers'),
          item('Peanut Butter', 'homemade-peanut-butter'),
          item('Energy Bites', 'energy-bites')
        ]
      },
      {
        id: 'sweet-treats',
        title: 'Sweet Treats',
        items: [
          item('Marshmallows', 'homemade-marshmallows'),
          item('Chocolate Syrup', 'chocolate-syrup'),
          item('Caramel Sauce', 'caramel-sauce'),
          item('Chocolate Bark', 'chocolate-bark'),
          item('Candied Pecans', 'candied-pecans'),
          item('Rice Crispy Treats', 'rice-crispy-treats'),
          item('Caramel Popcorn', 'caramel-popcorn'),
          item('Fruit Dip', 'fruit-dip'),
          item('Gummy Bears', 'homemade-gummy-bears'),
          item('Cookie Dough', 'homemade-cookie-dough')
        ]
      },
      {
        id: 'convenience-foods',
        title: 'Convenience Foods',
        items: [
          item('Cream of Chicken Soup', 'cream-of-chicken-soup'),
          item('Cream of Mushroom Soup', 'cream-of-mushroom-soup'),
          item('Cream of Celery Soup', 'cream-of-celery-soup'),
          item('Hamburger Helper Mix', 'hamburger-helper-mix'),
          item('Rice Pilaf Mix', 'rice-pilaf-mix'),
          item('Stuffing Mix', 'stuffing-mix'),
          item('Teriyaki Sauce', 'teriyaki-sauce'),
          item('Stir Fry Sauce', 'stir-fry-sauce'),
          item('Sweet and Sour Sauce', 'sweet-and-sour-sauce'),
          item('Alfredo Sauce', 'alfredo-sauce')
        ]
      },
      {
        id: 'spice-blends',
        title: 'Spice Blends',
        items: [
          item('Cajun Seasoning', 'cajun-seasoning'),
          item('Fajita Seasoning', 'fajita-seasoning'),
          item('Chili Seasoning', 'chili-seasoning'),
          item('Lemon Pepper', 'lemon-pepper-seasoning'),
          item('Poultry Seasoning', 'poultry-seasoning'),
          item('Burger Seasoning', 'burger-seasoning'),
          item('Blackening Seasoning', 'blackening-seasoning'),
          item('Everything Bagel Seasoning', 'everything-bagel-seasoning'),
          item('Garlic Herb Blend', 'garlic-herb-seasoning'),
          item('Taco Ranch Seasoning', 'taco-ranch-seasoning')
        ]
      },
      {
        id: 'household-and-personal-care',
        title: 'Household & Personal Care',
        paragraphs: ['Coming soon...']
      }
    ],
    outro: [
      "The goal isn't to make everything.",
      'The goal is to know that you can.',
      'Pick one thing this week and start there.'
    ]
  },
  {
    title: 'The 30-Day Before the Box Challenge',
    slug: '30-day-before-the-box-challenge',
    category: 'Challenges',
    excerpt: 'Learn one new from-scratch skill every day for 30 days and build confidence in your kitchen.',
    featuredImage: '/images/blog/30-day-before-the-box-challenge.jpg',
    pinterestTitle: 'The 30-Day Before the Box Challenge',
    intro: [
      'One simple swap at a time.',
      'Trying to replace everything overnight is a recipe for frustration.',
      'Instead, spend 30 days learning one new skill each day.',
      "By the end of the month, you'll have a pantry full of homemade staples and the confidence to keep going."
    ],
    sections: [
      {
        id: 'week-1',
        title: 'Week 1: The Easy Wins',
        items: [
          item('Day 1 - Butter', 'butter'),
          item('Day 2 - Buttermilk', 'buttermilk'),
          item('Day 3 - Taco Seasoning', 'taco-seasoning'),
          item('Day 4 - Ranch Seasoning', 'ranch-seasoning'),
          item('Day 5 - Brown Sugar', 'brown-sugar'),
          item('Day 6 - Powdered Sugar', 'powdered-sugar'),
          item('Day 7 - Hot Cocoa Mix', 'hot-cocoa-mix')
        ]
      },
      {
        id: 'week-2',
        title: 'Week 2: Bread Basics',
        items: [
          item('Day 8 - Sandwich Bread', 'sandwich-bread'),
          item('Day 9 - Flour Tortillas', 'flour-tortillas'),
          item('Day 10 - Pizza Dough', 'pizza-dough'),
          item('Day 11 - Biscuits', 'buttermilk-biscuits'),
          item('Day 12 - Hamburger Buns', 'hamburger-buns'),
          item('Day 13 - Crackers', 'homemade-crackers'),
          item('Day 14 - Pancake Mix', 'pancake-mix')
        ]
      },
      {
        id: 'week-3',
        title: 'Week 3: Refrigerator Staples',
        items: [
          item('Day 15 - Whipped Cream', 'whipped-cream'),
          item('Day 16 - Yogurt', 'yogurt'),
          item('Day 17 - Greek Yogurt', 'greek-yogurt'),
          item('Day 18 - Cream Cheese', 'cream-cheese'),
          item('Day 19 - Sour Cream', 'sour-cream'),
          item('Day 20 - Mayonnaise', 'homemade-mayonnaise'),
          item('Day 21 - Peanut Butter', 'homemade-peanut-butter')
        ]
      },
      {
        id: 'week-4',
        title: 'Week 4: Convenience Foods',
        items: [
          item('Day 22 - Chicken Broth'),
          item('Day 23 - Cream of Chicken Soup', 'cream-of-chicken-soup'),
          item('Day 24 - Rice Pilaf Mix', 'rice-pilaf-mix'),
          item('Day 25 - Stuffing Mix', 'stuffing-mix'),
          item('Day 26 - Marinara Sauce', 'marinara-sauce'),
          item('Day 27 - BBQ Sauce', 'homemade-bbq-sauce'),
          item('Day 28 - Granola Bars', 'granola-bars'),
          item('Day 29 - Fruit Snacks', 'fruit-snacks'),
          item('Day 30 - Choose Your Favorite and Make It Again')
        ]
      }
    ],
    outro: [
      'Congratulations.',
      'You just learned more kitchen skills in 30 days than most people learn in years.'
    ]
  },
  {
    title: 'The Before the Box Pantry Starter Guide',
    slug: 'pantry-starter-guide',
    category: 'Beginner Guides',
    excerpt: 'The essential ingredients, spices, and tools needed to start making everyday foods from scratch.',
    featuredImage: '/images/blog/pantry-starter-guide.jpg',
    pinterestTitle: 'The Before the Box Pantry Starter Guide',
    intro: [
      'Build your pantry once. Use it for hundreds of recipes.',
      'One of the biggest misconceptions about homemade food is that it requires special ingredients.',
      'In reality, most from-scratch recipes use the same pantry staples repeatedly.'
    ],
    sections: [
      { id: 'dry-goods', title: 'Dry Goods', items: ['Flour', 'Sugar', 'Brown Sugar', 'Powdered Sugar', 'Oats', 'Rice', 'Cornmeal', 'Pasta', 'Bread Crumbs'].map((text) => item(text)) },
      { id: 'baking-essentials', title: 'Baking Essentials', items: ['Baking Powder', 'Baking Soda', 'Yeast', 'Cocoa Powder', 'Cornstarch', 'Vanilla Extract'].map((text) => item(text)) },
      { id: 'oils-and-fats', title: 'Oils & Fats', items: ['Butter', 'Olive Oil', 'Coconut Oil', 'Lard or Tallow'].map((text) => item(text)) },
      { id: 'dairy-staples', title: 'Dairy Staples', items: ['Milk', 'Heavy Cream', 'Greek Yogurt', 'Parmesan Cheese'].map((text) => item(text)) },
      { id: 'vinegars', title: 'Vinegars', items: ['White Vinegar', 'Apple Cider Vinegar', 'Red Wine Vinegar'].map((text) => item(text)) },
      {
        id: 'herbs-and-spices',
        title: 'Herbs & Spices',
        items: ['Garlic Powder', 'Onion Powder', 'Paprika', 'Chili Powder', 'Cumin', 'Oregano', 'Basil', 'Thyme', 'Cinnamon', 'Black Pepper'].map((text) => item(text)),
        paragraphs: ['With these ten spices alone, you can make most of the seasoning blends on this website.']
      },
      { id: 'essential-equipment', title: 'Essential Equipment', items: ['Mason Jars', 'Measuring Cups', 'Mixing Bowls', 'Baking Sheets', 'Dutch Oven', 'Fine Mesh Strainer', 'Immersion Blender'].map((text) => item(text)) },
      {
        id: 'start-here',
        title: 'Start Here',
        items: [
          item('Butter', 'butter'),
          item('Taco Seasoning', 'taco-seasoning'),
          item('Ranch Seasoning', 'ranch-seasoning'),
          item('Bread', 'sandwich-bread'),
          item('Tortillas', 'flour-tortillas'),
          item('Yogurt', 'yogurt'),
          item('Granola Bars', 'granola-bars')
        ],
        paragraphs: ['These seven recipes will save money, reduce packaging, and build confidence quickly.']
      }
    ],
    outro: [
      "The goal of Before the Box isn't perfection.",
      "It's learning how food was made before it came in a box and discovering that many of those skills are still within reach today."
    ]
  }
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
