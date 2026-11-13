import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { render } from 'astro:content';

import { siteMetadata } from '../data/siteMetadata';
import { getPosts } from './posts';
import { postUrl } from './urls';

type FeedItem = {
  title: string;
  date: Date;
  url: string;
  html: string;
};

const escapeAttribute = (value: string): string => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const absoluteUrls = (html: string): string => html.replace(/(src|href)="\/(?!\/)/g, `$1="${siteMetadata.siteUrl}/`);

const renderFeedItems = async (): Promise<FeedItem[]> => {
  const container = await AstroContainer.create();
  const posts = await getPosts();

  return Promise.all(
    posts.map(async (post) => {
      const { title, date, image } = post.data;
      const url = new URL(postUrl(post.id), siteMetadata.siteUrl).href;
      const { Content } = await render(post);
      const html = await container.renderToString(Content);
      const imageHtml = image ? `<p><img src="${image.src}" alt="${escapeAttribute(title)}" class="webfeedsFeaturedVisual" /></p>` : '';

      return { title, date, url, html: absoluteUrls(imageHtml + html) };
    })
  );
};

let feedItems: Promise<FeedItem[]> | undefined;

/** All posts with their full rendered content, newest first. Rendered once and shared by both feeds. */
export const getFeedItems = (): Promise<FeedItem[]> => (feedItems ??= renderFeedItems());
