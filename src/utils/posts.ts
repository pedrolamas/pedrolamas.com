import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** All posts, newest first. */
export const getPosts = async (): Promise<Post[]> => (await getCollection('posts')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

/** Every distinct category or tag, with the posts that have it. */
export const getPostsByTerm = async (field: 'categories' | 'tags'): Promise<{ term: string; posts: Post[] }[]> => {
  const posts = await getPosts();
  const terms = [...new Set(posts.flatMap((post) => post.data[field]))];

  return terms.map((term) => ({ term, posts: posts.filter((post) => post.data[field].includes(term)) }));
};

/** `March 28, 2023` */
export const formatDate = (date: Date): string => date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

const decodeEntities = (value: string): string =>
  value
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

// Port of underscore.string's prune, as used by Gatsby for excerpts.
const prune = (value: string, length: number, pruneString = '…'): string => {
  if (value.length <= length) return value;

  let template = value.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, (c) => (c.toUpperCase() !== c.toLowerCase() ? 'A' : ' '));

  template = /\w\w/.test(template.slice(-2)) ? template.replace(/\s*\S+$/, '') : template.slice(0, -1).trimEnd();

  return (template + pruneString).length > value.length ? value : value.slice(0, template.length) + pruneString;
};

/** Plain text summary of the post, used for meta descriptions. */
export const getPostExcerpt = (post: Post): string => {
  const html = post.rendered?.html ?? '';
  const text = decodeEntities(html.replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();

  return prune(text, 250);
};

export type IndexPage = {
  pageIndex: number;
  posts: Post[];
  newerUrl?: string;
  olderUrl?: string;
};

const indexPageUrl = (pageIndex: number): string => (pageIndex === 1 ? '/' : `/page/${pageIndex}/`);

/** Posts split into the home page (`/`) and the `/page/N/` pages. */
export const getIndexPages = async (pageSize = 8): Promise<IndexPage[]> => {
  const posts = await getPosts();
  const totalPages = Math.ceil(posts.length / pageSize);

  return Array.from({ length: totalPages }, (_, index) => {
    const pageIndex = index + 1;

    return {
      pageIndex,
      posts: posts.slice(index * pageSize, pageIndex * pageSize),
      newerUrl: pageIndex > 1 ? indexPageUrl(pageIndex - 1) : undefined,
      olderUrl: pageIndex < totalPages ? indexPageUrl(pageIndex + 1) : undefined,
    };
  });
};
