import { getImage } from 'astro:assets';

import { siteMetadata } from '../data/siteMetadata';

export const getAppIcons = async () => Promise.all([48, 72, 96, 144, 192, 256, 384, 512].map(async (size) => ({ size, src: (await getImage({ src: siteMetadata.logo, width: size, height: size, format: 'png' })).src })));
