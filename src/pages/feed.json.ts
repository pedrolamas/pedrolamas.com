import type { APIRoute } from 'astro';

import { siteMetadata } from '../data/siteMetadata';
import { getFeedItems } from '../utils/feed';

export const GET: APIRoute = async () => {
  const { title, description, author, siteUrl } = siteMetadata;

  const feed = {
    version: 'https://jsonfeed.org/version/1',
    title,
    home_page_url: siteUrl,
    feed_url: new URL('/feed.json', siteUrl).href,
    description,
    author: { name: author },
    items: (await getFeedItems()).map(({ title, date, url, html }) => ({
      id: url,
      content_html: html,
      url,
      title,
      date_modified: date.toISOString(),
    })),
  };

  return new Response(JSON.stringify(feed), { headers: { 'Content-Type': 'application/feed+json; charset=utf-8' } });
};
