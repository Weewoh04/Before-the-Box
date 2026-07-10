import Header from '../../../components/Header';
import NativeBanner from '../../../components/NativeBanner';
import { blogPosts, getBlogPostBySlug } from '../../../data/blog-posts';
import { notFound } from 'next/navigation';
import { Share2 } from 'lucide-react';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Before the Box`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [post.featuredImage]
    }
  };
}

function LinkedItem({ item }) {
  if (item.href) return <a href={item.href}>{item.text}</a>;
  return <span>{item.text}</span>;
}

function ParagraphText({ content, keyPrefix }) {
  if (typeof content === 'string') {
    return <p key={keyPrefix}>{content}</p>;
  }

  if (content && typeof content === 'object' && content.href) {
    return (
      <p key={keyPrefix}>
        <a href={content.href} target="_blank" rel="noreferrer">
          {content.text}
        </a>
      </p>
    );
  }

  return null;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://before-the-box.vercel.app';
  const pageUrl = `${siteUrl}/blog/${post.slug}`;
  const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&description=${encodeURIComponent(post.pinterestTitle || post.title)}`;

  return (
    <>
      <Header />
      <main className="recipe-page blog-post">
        <section className="recipe-hero">
          <div className="kicker">{post.category}</div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="recipe-tools no-print">
            <a className="btn secondary" href={pinterestUrl} target="_blank" rel="noreferrer"><Share2 size={18} /> Share to Pinterest</a>
          </div>
        </section>

        <div className="featured-placeholder" aria-label={`Featured image placeholder for ${post.title}`}>
          <span>{post.title}</span>
        </div>

        <section className="recipe-box toc no-print">
          <h2>Table of contents</h2>
          <ol>
            {post.sections.map((section) => (
              <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
            ))}
          </ol>
        </section>

        <NativeBanner />

        <article className="recipe-box article-body">
          {post.intro.map((paragraph, index) => (
            <ParagraphText key={`${post.slug}-intro-${index}`} content={paragraph} />
          ))}

          {post.sections.map((section) => (
            <section id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph, index) => (
                <ParagraphText key={`${section.id}-paragraph-${index}`} content={paragraph} />
              ))}
              {section.items && (
                <ul>
                  {section.items.map((entry) => (
                    <li key={entry.text}><LinkedItem item={entry} /></li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {post.outro.map((paragraph, index) => (
            <ParagraphText key={`${post.slug}-outro-${index}`} content={paragraph} />
          ))}
        </article>
      </main>
      <footer className="footer">Copyright {new Date().getFullYear()} Before the Box - Make the thing. Skip the label.</footer>
    </>
  );
}
