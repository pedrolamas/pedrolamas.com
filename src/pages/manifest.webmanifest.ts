import type { APIRoute } from 'astro';

import { siteMetadata } from '../data/siteMetadata';
import { getAppIcons } from '../utils/appIcons';

export const GET: APIRoute = async () => {
  const icons = (await getAppIcons()).map(({ size, src }) => ({ src, sizes: `${size}x${size}`, type: 'image/png' }));

  const manifest = {
    name: siteMetadata.title,
    short_name: siteMetadata.title,
    start_url: '/',
    background_color: '#202020',
    theme_color: '#202020',
    display: 'minimal-ui',
    icons,
  };

  return new Response(JSON.stringify(manifest), { headers: { 'Content-Type': 'application/manifest+json' } });
};
