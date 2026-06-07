import Header from '../components/Header';
import AdSlot from '../components/AdSlot';
import { recipes, categories } from '../data/recipes';
import { ArrowRight, Printer, Share2 } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div>
            <div className="kicker">From-scratch living without the overwhelm</div>
            <h1>Before the Box</h1>
            <p>Make the thing. Skip the label. Simple recipes for everyday foods, pantry staples, snacks, and household swaps made with ingredients you actually recognize.</p>
            <div className="actions">
              <a className="btn" href="#recipes">Browse recipes <ArrowRight size={18} /></a>
              <a className="btn secondary" href="#start">Start here</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-image">Butter in a jar. Bread on the counter. A pantry that makes sense.</div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="section-title">
            <h2>What do you want to make?</h2>
            <p>Each category is built around replacing one store-bought box, bottle, jar, packet, or bag at a time.</p>
          </div>
          <div className="grid">
            {categories.map((cat) => (
              <article className="category-card" key={cat.title}>
                <span>{cat.icon}</span>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section"><AdSlot label="Homepage ad space" /></section>

        <section className="section" id="recipes">
          <div className="section-title">
            <h2>Starter recipes</h2>
            <p>Beginner-friendly wins that prove from-scratch does not have to be complicated.</p>
          </div>
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

        <section className="section" id="start">
          <div className="newsletter">
            <div>
              <h2>Build your scratch kitchen one swap at a time.</h2>
              <p>Use this section later for your email list, free printable binder, or “7 days of pantry swaps” opt-in.</p>
            </div>
            <form>
              <input placeholder="Email address" aria-label="Email address" />
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Before the Box · Make the thing. Skip the label.</footer>
    </>
  );
}
