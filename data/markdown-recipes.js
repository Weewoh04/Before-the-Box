import fs from 'fs';
import path from 'path';

const recipesDirectory = path.join(process.cwd(), 'content', 'recipes');

function parseFrontMatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { frontMatter: {}, body: source };

  const frontMatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':');
    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    const rawValue = line.slice(separator + 1).trim();

    if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
      frontMatter[key] = rawValue
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim().replace(/^"|"$/g, ''))
        .filter(Boolean);
    } else {
      frontMatter[key] = rawValue.replace(/^"|"$/g, '');
    }
  }

  return { frontMatter, body: match[2].trim() };
}

function parseSections(body) {
  const sections = {};
  const blocks = body.split(/\r?\n## /);

  for (const block of blocks) {
    const normalized = block.startsWith('## ') ? block.slice(3) : block;
    const [heading, ...contentLines] = normalized.split(/\r?\n/);
    if (!contentLines.length) continue;

    sections[heading.trim()] = contentLines.join('\n').trim();
  }

  return sections;
}

function markdownListToArray(markdown = '') {
  return markdown
    .split(/\r?\n/)
    .map((line) => line.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, '').trim())
    .filter(Boolean);
}

function markdownText(markdown = '') {
  return markdown.replace(/\r?\n+/g, ' ').trim();
}

function recipeFromMarkdown(fileName) {
  const filePath = path.join(recipesDirectory, fileName);
  const source = fs.readFileSync(filePath, 'utf8');
  const { frontMatter, body } = parseFrontMatter(source);
  const sections = parseSections(body);

  return {
    slug: frontMatter.slug || fileName.replace(/\.md$/, ''),
    title: frontMatter.title || fileName.replace(/-/g, ' ').replace(/\.md$/, ''),
    category: frontMatter.category || 'Recipes',
    summary: markdownText(sections['Why Make It?']),
    time: frontMatter.prepTime || 'See recipe',
    difficulty: 'Beginner',
    yield: frontMatter.yield || '1 batch',
    ingredients: markdownListToArray(sections.Ingredients),
    equipment: [],
    steps: markdownListToArray(sections.Instructions),
    storage: markdownText(sections.Storage),
    costComparison: markdownText(sections['Cost Comparison']),
    homemade: 'The ingredients listed in this homemade recipe.',
    storeBought: markdownText(sections["What's In The Box?"]),
    pinterestText: frontMatter.pinterestTitle || frontMatter.title,
    featuredImage: frontMatter.featuredImage
  };
}

export function getMarkdownRecipes() {
  if (!fs.existsSync(recipesDirectory)) return [];

  return fs
    .readdirSync(recipesDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .sort()
    .map(recipeFromMarkdown);
}
