import Header from '../../components/Header';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | Before the Box',
  description: 'Simple from-scratch kitchen notes from Before the Box.'
};

const posts = [
  {
    title: 'How to Start Replacing Store-Bought Staples',
    category: 'Scratch Kitchen',
    summary: 'A simple way to choose your first swaps without turning your whole kitchen upside down.',
    href: '/recipes'
  },
  {
    title: 'The Pantry Staples Worth Making First',
    category: 'Pantry',
    summary: 'Seasoning blends, baking mixes, and sauces are easy wins when you want fewer labels in the cabinet.',
    href: '/categories/pantry-staples'
  },
  {
    title: 'Why Small Homemade Swaps Add Up',
    category: 'Before the Box',
    summary: 'From butter in a jar to breakfast mixes, small recipes can make everyday food feel simpler again.',
    href: '/recipes'
  }
];

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
            {posts.map((post) => (
              <a className="note-card blog-card" href={post.href} key={post.title}>
                <div className="kicker">{post.category}</div>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
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
