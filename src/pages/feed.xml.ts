import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';

import { siteMetadata } from '../data/siteMetadata';
import { getFeedItems } from '../utils/feed';

export const GET: APIRoute = async () => {
  const { title, description, siteUrl } = siteMetadata;

  return rss({
    title,
    description,
    site: siteUrl,
    trailingSlash: true,
    items: (await getFeedItems()).map(({ title, date, url, html }) => ({ title, pubDate: date, link: url, content: html })),
  });
};
