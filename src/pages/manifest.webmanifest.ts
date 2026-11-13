import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';

import { siteMetadata } from '../data/siteMetadata';

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    [48, 72, 96, 144, 192, 256, 384, 512].map(async (size) => ({
      src: (await getImage({ src: siteMetadata.logo, width: size, height: size, format: 'png' })).src,
      sizes: `${size}x${size}`,
      type: 'image/png',
    }))
  );

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
