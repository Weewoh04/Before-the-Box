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

## Pinterest

Each recipe page has a Pinterest share button. Replace `https://your-domain.com` in `app/recipes/[slug]/page.js` with your real domain after deployment.

## Ads

Ad placeholders are in `components/AdSlot.js`. Replace the placeholder with your Google AdSense, Mediavine Journey, or other ad network code.

## Print mode

The recipe page includes a `Print recipe` button. CSS hides navigation, ads, and extra page content while printing.
