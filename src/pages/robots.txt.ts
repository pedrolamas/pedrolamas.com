import type { APIRoute } from 'astro';

import { siteMetadata } from '../data/siteMetadata';

const { siteUrl } = siteMetadata;

export const GET: APIRoute = () => new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap-index.xml', siteUrl).href}\nHost: ${siteUrl}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
