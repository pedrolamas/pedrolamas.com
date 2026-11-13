/** `2013-01-05-welcome` → `/2013/01/05/welcome/` */
export const postUrl = (id: string): string => {
  const match = /^(\d{4})-(\d{2})-(\d{2})-(.+)$/.exec(id);

  if (!match) throw new Error(`Invalid post id: ${id}`);

  const [, year, month, day, title] = match;

  return `/${year}/${month}/${day}/${title}/`;
};

/** `about/index` → `/about/`, `about/pgp-public-key` → `/about/pgp-public-key/` */
export const pageUrl = (id: string): string => `/${id.replace(/(^|\/)index$/, '')}/`.replace(/\/+/g, '/');
