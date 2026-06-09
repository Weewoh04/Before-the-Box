import Header from '../../components/Header';
import IngredientExplorer from '../../components/IngredientExplorer';
import NativeBanner from '../../components/NativeBanner';
import { ingredientCategories, ingredients } from '../../data/ingredients';

export const metadata = {
  title: 'Ingredient Encyclopedia | Before the Box',
  description: "Understand what packaged food ingredients are, why they're used, where they appear, and which homemade alternatives exist.",
  openGraph: {
    title: 'Ingredient Encyclopedia | Before the Box',
    description: "Understand what's in your food. No fear. No guilt. Just information.",
    type: 'website'
  }
};

export default function IngredientsPage() {
  const recentlyAdded = ingredients.filter((ingredient) => ingredient.recent).slice(0, 6);
  const popularIngredients = ingredients.filter((ingredient) => ingredient.popular).slice(0, 6);

  return (
    <>
      <Header />
      <main>
        <section className="section index-hero ingredient-hero">
          <div className="section-title">
            <div>
              <div className="kicker">Before the Box library</div>
              <h1>Ingredient Encyclopedia</h1>
            </div>
            <p>Understand what's in your food. No fear. No guilt. Just information.</p>
          </div>
          <p className="ingredient-intro">
            Many packaged foods contain ingredients that most people have never heard of. This encyclopedia explains what those ingredients are, why they're used, where they're commonly found, and how they compare to homemade alternatives.
          </p>
        </section>

        <section className="section ingredient-highlights">
          <div className="grid">
            <div className="note-card">
              <div className="kicker">Recently added</div>
              <ul className="link-list">
                {recentlyAdded.map((ingredient) => (
                  <li key={ingredient.slug}><a href={`/ingredients/${ingredient.slug}`}>{ingredient.name}</a></li>
                ))}
              </ul>
            </div>
            <div className="note-card">
              <div className="kicker">Popular ingredients</div>
              <ul className="link-list">
                {popularIngredients.map((ingredient) => (
                  <li key={ingredient.slug}><a href={`/ingredients/${ingredient.slug}`}>{ingredient.name}</a></li>
                ))}
              </ul>
            </div>
            <div className="note-card">
              <div className="kicker">Categories</div>
              <ul className="link-list">
                {ingredientCategories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <NativeBanner />

        <IngredientExplorer ingredients={ingredients} categories={ingredientCategories} />
      </main>
      <footer className="footer">Copyright {new Date().getFullYear()} Before the Box - Make the thing. Skip the label.</footer>
    </>
  );
}
