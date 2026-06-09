import Header from '../../../components/Header';
import { categories, getCategoryBySlug, getRecipesByCategory } from '../../../data/recipes';
import { notFound } from 'next/navigation';
import { Printer, Share2 } from 'lucide-react';

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: `${category.title} Recipes | Before the Box`,
    description: category.description
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryRecipes = getRecipesByCategory(category.title);

  return (
    <>
      <Header />
      <main>
        <section className="section index-hero">
          <div className="section-title">
            <div>
              <div className="kicker">Before the Box category</div>
              <h1>{category.title}</h1>
            </div>
            <p>{category.description}</p>
          </div>
        </section>

        <section className="section category-strip">
          {categories.map((item) => (
            <a className={`pill ${item.slug === category.slug ? 'active' : ''}`} href={`/categories/${item.slug}`} key={item.slug}>
              {item.title}
            </a>
          ))}
        </section>

        <section className="section recipe-index">
          {categoryRecipes.length > 0 ? (
            <div className="grid">
              {categoryRecipes.map((recipe) => (
                <a className="recipe-card" href={`/recipes/${recipe.slug}`} key={recipe.slug}>
                  <div className="kicker">{recipe.category}</div>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.summary}</p>
                  <div className="recipe-meta">
                    <span className="pill">{recipe.time}</span>
                    <span className="pill">{recipe.difficulty}</span>
                    <span className="pill"><Printer size={13} /> Printable</span>
                    <span className="pill"><Share2 size={13} /> Pinterest-ready</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="recipe-box">
              <h2>Recipes coming soon</h2>
              <p>This category is part of the Before the Box roadmap. Check the full recipe index for the current collection.</p>
              <a className="btn secondary" href="/recipes">Browse all recipes</a>
            </div>
          )}
        </section>
      </main>
      <footer className="footer">Copyright {new Date().getFullYear()} Before the Box - Make the thing. Skip the label.</footer>
    </>
  );
}
