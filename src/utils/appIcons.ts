import { getImage } from 'astro:assets';

import { siteMetadata } from '../data/siteMetadata';

/** Square PNG renditions of the site logo, for the web manifest and Apple touch icons. */
export const getAppIcons = async () => Promise.all([48, 72, 96, 144, 192, 256, 384, 512].map(async (size) => ({ size, src: (await getImage({ src: siteMetadata.logo, width: size, height: size, format: 'png' })).src })));
