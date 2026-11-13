export const postParams = (id: string) => {
  const match = /^(\d{4})-(\d{2})-(\d{2})-(.+)$/.exec(id);

  if (!match) throw new Error(`Invalid post id: ${id}`);

  const [, year, month, day, slug] = match;

  return { year, month, day, slug };
};

export const postUrl = (id: string): string => {
  const { year, month, day, slug } = postParams(id);

  return `/${year}/${month}/${day}/${slug}/`;
};

export const pageUrl = (id: string): string => `/${id.replace(/(^|\/)index$/, '')}/`.replace(/\/+/g, '/');
