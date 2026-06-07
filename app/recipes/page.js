import Header from '../../components/Header';
import { recipes } from '../../data/recipes';
import { Printer, Share2 } from 'lucide-react';

export const metadata = {
  title: 'Recipes | Before the Box',
  description: 'Simple homemade swaps from Before the Box.'
};

export default function RecipesIndexPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section index-hero">
          <div className="section-title">
            <div>
              <div className="kicker">Before the Box recipes</div>
              <h1>Recipes</h1>
            </div>
            <p>Make the thing. Skip the label. Browse simple from-scratch swaps for everyday staples.</p>
          </div>
        </section>

        <section className="section recipe-index">
          <div className="grid">
            {recipes.map((recipe) => (
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
        </section>
      </main>
      <footer className="footer">Copyright {new Date().getFullYear()} Before the Box - Make the thing. Skip the label.</footer>
    </>
  );
}
