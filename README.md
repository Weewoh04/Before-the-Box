# Before the Box

**Tagline:** Make the thing. Skip the label.

A clean Next.js starter website for from-scratch recipes, printable recipe cards, Pinterest sharing, and ad-supported content.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Create a GitHub repo.
2. Upload/push this project.
3. Go to Vercel and import the repo.
4. Deploy.

## Add recipes

Edit `data/recipes.js` and add a new object to the `recipes` array.

Markdown recipes in `content/recipes` can define image fields in frontmatter:

```yaml
---
title: Homemade Ranch Seasoning
slug: homemade-ranch-seasoning
imagePrompt: Homemade ranch seasoning in a glass mason jar, dried herbs visible, measuring spoons nearby, farmhouse kitchen aesthetic
featuredImage: /images/recipes/homemade-ranch-seasoning/hero.jpg
pinterestImage: /images/recipes/homemade-ranch-seasoning/pinterest.jpg
ingredientImage: /images/recipes/homemade-ranch-seasoning/ingredients.jpg
ogImage: /images/recipes/homemade-ranch-seasoning/og.jpg
---
```

If image paths are omitted, the site looks for `/images/recipes/[slug]/hero.jpg`, `/pinterest.jpg`, `/ingredients.jpg`, and `/og.jpg`. The lookup also supports `jpeg`, `png`, `webp`, and `svg`. Missing files fall back to branded defaults in `public/images/recipes`, so recipe pages keep rendering without errors.

`featuredImage` is used as the recipe hero image. If `pinterestImage`, `ingredientImage`, or `ogImage` are missing, they automatically fall back to `featuredImage`.

Recipe prompts automatically receive the Before the Box style suffix from `data/recipe-images.js`. Pinterest images should be `1000x1500`; Open Graph images should be `1200x630`.

The site also generates branded social images for every recipe:

- `/recipes/[slug]/pinterest-image`
- `/recipes/[slug]/og-image`

## Pinterest

Each recipe page has a Pinterest share button. Replace `https://your-domain.com` in `app/recipes/[slug]/page.js` with your real domain after deployment.

## Ads

Ad placeholders are in `components/AdSlot.js`. Replace the placeholder with your Google AdSense, Mediavine Journey, or other ad network code.

## Print mode

The recipe page includes a `Print recipe` button. CSS hides navigation, ads, and extra page content while printing.
