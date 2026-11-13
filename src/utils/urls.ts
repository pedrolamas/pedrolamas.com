/** `2013-01-05-welcome` → `{ year: '2013', month: '01', day: '05', slug: 'welcome' }` */
export const postParams = (id: string) => {
  const match = /^(\d{4})-(\d{2})-(\d{2})-(.+)$/.exec(id);

  if (!match) throw new Error(`Invalid post id: ${id}`);

  const [, year, month, day, slug] = match;

  return { year, month, day, slug };
};

/** `2013-01-05-welcome` → `/2013/01/05/welcome/` */
export const postUrl = (id: string): string => {
  const { year, month, day, slug } = postParams(id);

  return `/${year}/${month}/${day}/${slug}/`;
};

/** `about/index` → `/about/`, `about/pgp-public-key` → `/about/pgp-public-key/` */
export const pageUrl = (id: string): string => `/${id.replace(/(^|\/)index$/, '')}/`.replace(/\/+/g, '/');
