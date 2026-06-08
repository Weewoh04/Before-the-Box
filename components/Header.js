export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <a href="/" className="logo">Before the Box</a>
        <div className="nav-links">
          <a href="/recipes">Recipes</a>
          <a href="/#categories">Categories</a>
          <a href="/blog">Blog</a>
        </div>
      </nav>
    </header>
  );
}
