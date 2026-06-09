import Header from '../../../components/Header';
import AdSlot from '../../../components/AdSlot';
import NativeBanner from '../../../components/NativeBanner';
import PrintButton from '../../../components/PrintButton';
import { recipes } from '../../../data/recipes';
import { notFound } from 'next/navigation';
import { Share2 } from 'lucide-react';

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const recipe = recipes.find((item) => item.slug === slug);
  if (!recipe) return {};
  return {
    title: `${recipe.title} | Before the Box`,
    description: recipe.summary,
    openGraph: { title: recipe.title, description: recipe.summary, type: 'article' }
  };
}

export default async function RecipePage({ params }) {
  const { slug } = await params;
  const recipe = recipes.find((item) => item.slug === slug);
  if (!recipe) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://before-the-box.vercel.app';
  const pageUrl = `${siteUrl}/recipes/${recipe.slug}`;
  const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&description=${encodeURIComponent(recipe.pinterestText || recipe.title)}`;

  return (
    <>
      <Header />
      <main className="recipe-page">
        <section className="recipe-hero">
          <div className="kicker">{recipe.category}</div>
          <h1>{recipe.title}</h1>
          <p>{recipe.summary}</p>
          <div className="recipe-meta">
            <span className="pill">Prep time: {recipe.time}</span>
            <span className="pill">Difficulty: {recipe.difficulty}</span>
            <span className="pill">Yield: {recipe.yield}</span>
          </div>
          <div className="recipe-tools no-print">
            <PrintButton />
            <a className="btn secondary" href={pinterestUrl} target="_blank" rel="noreferrer"><Share2 size={18} /> Share to Pinterest</a>
          </div>
        </section>

        <AdSlot label="Recipe top ad space" />

        <section className="recipe-box">
          <h2>Why make it yourself?</h2>
          <p>Because small swaps add up. This recipe helps you replace a packaged item with a simple homemade version using fewer ingredients and more control.</p>
        </section>

        <section className="recipe-box">
          <h2>Ingredients</h2>
          <ul>{recipe.ingredients.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <NativeBanner />

        {recipe.equipment.length > 0 && (
          <section className="recipe-box">
            <h2>Equipment</h2>
            <ul>{recipe.equipment.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        )}

        <section className="recipe-box">
          <h2>Instructions</h2>
          <ol>{recipe.steps.map((item) => <li key={item}>{item}</li>)}</ol>
        </section>

        <AdSlot label="Recipe middle ad space" />

        <section className="recipe-box">
          <h2>Storage</h2>
          <p>{recipe.storage}</p>
        </section>

        {recipe.costComparison && (
          <section className="recipe-box">
            <h2>Cost comparison</h2>
            <p>{recipe.costComparison}</p>
          </section>
        )}

        <section className="recipe-box">
          <h2>What's In The Box?</h2>
          <table className="compare">
            <thead><tr><th>Homemade</th><th>Typical store-bought version</th></tr></thead>
            <tbody><tr><td>{recipe.homemade}</td><td>{recipe.storeBought}</td></tr></tbody>
          </table>
        </section>

        <section className="recipe-box print-card" id="print-card">
          <h2>{recipe.title}</h2>
          <p><strong>Prep time:</strong> {recipe.time} - <strong>Yield:</strong> {recipe.yield}</p>
          <h3>Ingredients</h3>
          <ul>{recipe.ingredients.map((item) => <li key={item}>{item}</li>)}</ul>
          <h3>Instructions</h3>
          <ol>{recipe.steps.map((item) => <li key={item}>{item}</li>)}</ol>
          <p><strong>Storage:</strong> {recipe.storage}</p>
        </section>
      </main>
      <footer className="footer">Copyright {new Date().getFullYear()} Before the Box</footer>
    </>
  );
}
