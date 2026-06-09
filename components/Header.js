import NativeBanner from './NativeBanner';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <a href="/" className="logo">Before the Box</a>
        <div className="nav-links">
          <a href="/recipes">Recipes</a>
          <a href="/#categories">Categories</a>
          <a href="/ingredients">Ingredient Encyclopedia</a>
          <a href="/blog">Blog</a>
        </div>
      </nav>
      <NativeBanner />
    </header>
  );
}
