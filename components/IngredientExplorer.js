'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';

export default function IngredientExplorer({ ingredients, categories }) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredIngredients = useMemo(() => {
    const search = query.trim().toLowerCase();

    return ingredients.filter((ingredient) => {
      const matchesCategory = activeCategory === 'All' || ingredient.category === activeCategory;
      const searchText = [
        ingredient.name,
        ingredient.category,
        ingredient.summary,
        ingredient.typicalProducts,
        ingredient.commonUses
      ].join(' ').toLowerCase();

      return matchesCategory && (!search || searchText.includes(search));
    });
  }, [activeCategory, ingredients, query]);

  const alphabet = [...new Set(ingredients.map((ingredient) => ingredient.name[0].toUpperCase()))].sort();

  return (
    <>
      <section className="section ingredient-controls">
        <label className="search-box">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search ingredients, products, or uses"
            aria-label="Search ingredients"
          />
        </label>

        <div className="filter-row" aria-label="Ingredient category filters">
          <button className={`pill filter-pill ${activeCategory === 'All' ? 'active' : ''}`} onClick={() => setActiveCategory('All')}>All</button>
          {categories.map((category) => (
            <button
              className={`pill filter-pill ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="section alphabet-strip">
        {alphabet.map((letter) => (
          <a className="pill" href={`#letter-${letter}`} key={letter}>{letter}</a>
        ))}
      </section>

      <section className="section ingredient-index">
        <div className="section-title">
          <div>
            <div className="kicker">{filteredIngredients.length} ingredients</div>
            <h2>Alphabetical Index</h2>
          </div>
          <p>Search by ingredient name, product type, or why the ingredient is used.</p>
        </div>

        {alphabet.map((letter) => {
          const letterIngredients = filteredIngredients.filter((ingredient) => ingredient.name.startsWith(letter));
          if (letterIngredients.length === 0) return null;

          return (
            <div className="ingredient-letter-group" id={`letter-${letter}`} key={letter}>
              <h3>{letter}</h3>
              <div className="grid">
                {letterIngredients.map((ingredient) => (
                  <a className="note-card ingredient-card" href={`/ingredients/${ingredient.slug}`} key={ingredient.slug}>
                    <div className="kicker">{ingredient.category}</div>
                    <h4>{ingredient.name}</h4>
                    <p>{ingredient.summary}</p>
                    <span className="read-link">Read more</span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
