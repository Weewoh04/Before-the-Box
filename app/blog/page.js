import Header from '../../components/Header';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blog-posts';

export const metadata = {
  title: 'Blog | Before the Box',
  description: 'Simple from-scratch kitchen notes from Before the Box.'
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section index-hero">
          <div className="section-title">
            <div>
              <div className="kicker">Before the Box blog</div>
              <h1>Blog</h1>
            </div>
            <p>Kitchen notes, from-scratch ideas, and simple ways to make the thing before reaching for the box.</p>
          </div>
        </section>

        <section className="section blog-index">
          <div className="grid">
            {blogPosts.map((post) => (
              <a className="note-card blog-card" href={`/blog/${post.slug}`} key={post.slug}>
                <div className="blog-thumb" aria-hidden="true">{post.category}</div>
                <div className="kicker">{post.category}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="read-link">Read more <ArrowRight size={16} /></span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">Copyright {new Date().getFullYear()} Before the Box - Make the thing. Skip the label.</footer>
    </>
  );
}
