import Header from '../../../components/Header';
import NativeBanner from '../../../components/NativeBanner';
import { getIngredientBySlug, ingredients } from '../../../data/ingredients';
import { recipes } from '../../../data/recipes';
import { notFound } from 'next/navigation';
import { Share2 } from 'lucide-react';

export function generateStaticParams() {
  return ingredients.map((ingredient) => ({ slug: ingredient.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ingredient = getIngredientBySlug(slug);
  if (!ingredient) return {};

  return {
    title: ingredient.seoTitle,
    description: ingredient.metaDescription,
    openGraph: {
      title: ingredient.seoTitle,
      description: ingredient.metaDescription,
      type: 'article'
    }
  };
}

function QuickFact({ label, value }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default async function IngredientPage({ params }) {
  const { slug } = await params;
  const ingredient = getIngredientBySlug(slug);
  if (!ingredient) notFound();

  const relatedRecipes = ingredient.relatedRecipes
    .map((recipeSlug) => recipes.find((recipe) => recipe.slug === recipeSlug))
    .filter(Boolean);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://before-the-box.vercel.app';
  const pageUrl = `${siteUrl}/ingredients/${ingredient.slug}`;
  const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&description=${encodeURIComponent(ingredient.seoTitle)}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: ingredient.seoTitle,
    description: ingredient.metaDescription,
    about: ingredient.name,
    mainEntityOfPage: pageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Before the Box'
    }
  };

  return (
    <>
      <Header />
      <main className="recipe-page ingredient-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <section className="recipe-hero">
          <div className="kicker">{ingredient.category}</div>
          <h1>{ingredient.name}</h1>
          <p>{ingredient.summary}</p>
          <div className="recipe-tools no-print">
            <a className="btn secondary" href={pinterestUrl} target="_blank" rel="noreferrer"><Share2 size={18} /> Share to Pinterest</a>
          </div>
        </section>

        <div className="featured-placeholder" aria-label={`Featured image placeholder for ${ingredient.name}`}>
          <span>{ingredient.name}</span>
        </div>

        <section className="recipe-box quick-facts">
          <h2>Quick Facts</h2>
          <dl>
            <QuickFact label="Common Uses" value={ingredient.commonUses} />
            <QuickFact label="Source" value={ingredient.source} />
            <QuickFact label="Category" value={ingredient.category} />
            <QuickFact label="Typical Products" value={ingredient.typicalProducts} />
            <QuickFact label="Homemade Alternatives" value={ingredient.homemadeAlternatives} />
          </dl>
        </section>

        <NativeBanner />

        <section className="recipe-box toc no-print">
          <h2>Table of contents</h2>
          <ol>
            <li><a href="#what-is-it">What Is It?</a></li>
            <li><a href="#why-is-it-used">Why Is It Used?</a></li>
            <li><a href="#where-youll-find-it">Where You'll Find It</a></li>
            <li><a href="#homemade-alternatives">Homemade Alternatives</a></li>
            <li><a href="#before-the-box-alternatives">Before the Box Alternatives</a></li>
            <li><a href="#final-thoughts">Final Thoughts</a></li>
          </ol>
        </section>

        <article className="recipe-box article-body">
          <section id="what-is-it">
            <h2>What Is It?</h2>
            {ingredient.whatItIs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <section id="why-is-it-used">
            <h2>Why Is It Used?</h2>
            <p>Food manufacturers use {ingredient.name} for practical reasons such as texture, stability, flavor, sweetness, or consistency.</p>
            <ul>{ingredient.whyUsed.map((use) => <li key={use}>{use}</li>)}</ul>
          </section>

          <section id="where-youll-find-it">
            <h2>Where You'll Find It</h2>
            <ul>{ingredient.whereFound.map((product) => <li key={product}>{product}</li>)}</ul>
          </section>

          <section id="homemade-alternatives">
            <h2>Homemade Alternatives</h2>
            <p>{ingredient.homemadeAlternatives}</p>
          </section>

          <section id="before-the-box-alternatives">
            <h2>Before the Box Alternatives</h2>
            {relatedRecipes.length > 0 ? (
              <ul>
                {relatedRecipes.map((recipe) => (
                  <li key={recipe.slug}><a href={`/recipes/${recipe.slug}`}>{recipe.title}</a></li>
                ))}
              </ul>
            ) : (
              <p>There are no direct recipe matches yet, but this entry is ready to connect to future Before the Box recipes.</p>
            )}
          </section>

          <section id="final-thoughts">
            <h2>Final Thoughts</h2>
            <p>{ingredient.finalThought}</p>
          </section>
        </article>
      </main>
      <footer className="footer">Copyright {new Date().getFullYear()} Before the Box - Make the thing. Skip the label.</footer>
    </>
  );
}
