import fs from 'fs';
import path from 'path';

export const recipeImageStylePrompt = 'Realistic food photography, overhead view, farmhouse kitchen aesthetic, warm natural window lighting, rustic wooden table, Pinterest style recipe photography, high detail, inviting homemade food, soft shadows, professional food photography, vertical composition.';

export const defaultRecipeImages = {
  featuredImage: '/images/recipes/default-recipe-hero.svg',
  pinterestImage: '/images/recipes/default-recipe-pinterest.svg',
  ingredientImage: '/images/recipes/default-recipe-ingredients.svg',
  ogImage: '/images/recipes/default-recipe-og.svg'
};

const publicDirectory = path.join(process.cwd(), 'public');
const imageExtensions = ['jpg', 'jpeg', 'png', 'webp', 'svg'];
const imageFileNames = {
  featuredImage: 'hero',
  pinterestImage: 'pinterest',
  ingredientImage: 'ingredients',
  ogImage: 'og'
};

function isRemoteUrl(value = '') {
  return /^https?:\/\//i.test(value);
}

function publicPathExists(publicPath = '') {
  if (!publicPath || isRemoteUrl(publicPath)) return Boolean(publicPath);

  const normalizedPath = publicPath.startsWith('/') ? publicPath.slice(1) : publicPath;
  return fs.existsSync(path.join(publicDirectory, normalizedPath));
}

function firstExistingRecipeImage(slug, imageKey) {
  const baseName = imageFileNames[imageKey];
  if (!baseName) return '';

  return imageExtensions
    .map((extension) => `/images/recipes/${slug}/${baseName}.${extension}`)
    .find(publicPathExists) || '';
}

function resolveImagePath(slug, explicitPath, imageKey) {
  if (explicitPath && publicPathExists(explicitPath)) return explicitPath;

  return firstExistingRecipeImage(slug, imageKey) || defaultRecipeImages[imageKey];
}

function resolveOptionalImagePath(explicitPath, fallbackPath) {
  if (explicitPath && publicPathExists(explicitPath)) return explicitPath;

  return fallbackPath;
}

export function createRecipeImagePrompt(recipe) {
  const title = recipe.title || 'Homemade pantry recipe';
  const basePrompt = recipe.imagePrompt || `${title} homemade pantry staple, ingredients in glass jars, measuring spoons nearby`;

  if (basePrompt.includes(recipeImageStylePrompt)) return basePrompt;

  return `${basePrompt}. ${recipeImageStylePrompt}`;
}

export function createRecipeAltText(title) {
  return `${title} recipe from Before the Box`;
}

export function absoluteImageUrl(imagePath, siteUrl) {
  if (!imagePath || isRemoteUrl(imagePath)) return imagePath;

  return `${siteUrl.replace(/\/$/, '')}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
}

export function createRecipeImageMetadata(recipe) {
  const slug = recipe.slug;
  const title = recipe.title;
  const featuredImage = resolveImagePath(slug, recipe.featuredImage || recipe.heroImage, 'featuredImage');

  return {
    imagePrompt: createRecipeImagePrompt(recipe),
    imageAlt: createRecipeAltText(title),
    featuredImage,
    heroImage: featuredImage,
    pinterestImage: resolveOptionalImagePath(recipe.pinterestImage, featuredImage),
    ingredientImage: resolveOptionalImagePath(recipe.ingredientImage, featuredImage),
    ogImage: resolveOptionalImagePath(recipe.ogImage, featuredImage),
    pinterestGeneratedImage: `/recipes/${slug}/pinterest-image`,
    ogGeneratedImage: `/recipes/${slug}/og-image`,
    pinterest: {
      width: 1000,
      height: 1500,
      title,
      tagline: 'Make the Thing. Skip the Label.',
      brand: 'Before the Box'
    },
    openGraph: {
      width: 1200,
      height: 630,
      title,
      brand: 'Before the Box'
    }
  };
}

export function withRecipeImages(recipe) {
  const imageMetadata = createRecipeImageMetadata(recipe);

  return {
    ...recipe,
    ...imageMetadata,
    images: {
      featured: imageMetadata.featuredImage,
      hero: imageMetadata.featuredImage,
      pinterest: imageMetadata.pinterestImage,
      pinterestGenerated: imageMetadata.pinterestGeneratedImage,
      ingredient: imageMetadata.ingredientImage,
      openGraph: imageMetadata.ogImage,
      openGraphGenerated: imageMetadata.ogGeneratedImage
    },
    imageMetadata
  };
}
