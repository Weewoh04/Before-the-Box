import { recipes } from '../../../../data/recipes';
import { absoluteImageUrl } from '../../../../data/recipe-images';
import { createPinterestImageSvg } from '../../../../data/social-image-svg';

export async function GET(_request, { params }) {
  const { slug } = await params;
  const recipe = recipes.find((item) => item.slug === slug);

  if (!recipe) {
    return new Response('Recipe not found', { status: 404 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://before-the-box.vercel.app';
  const svg = createPinterestImageSvg({
    title: recipe.title,
    imageUrl: absoluteImageUrl(recipe.featuredImage, siteUrl)
  });

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
