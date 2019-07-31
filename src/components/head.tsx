import React from 'react';
import { Helmet } from 'react-helmet';
import Url from 'url';

import SiteContext from './siteContext';
import { Utils } from '../utils';

type MetaProps = JSX.IntrinsicElements['meta'];

type HeadProps = {
  title?: string;
  description?: string;
  url?: string;
  mdxMeta?: Utils.SafeMdxMetadata;
  metaProps?: MetaProps[];
};

const Head: React.FunctionComponent<HeadProps> = props => {
  const { siteMetadata } = React.useContext(SiteContext);

  if (!siteMetadata) return null;

  const { siteUrl, description, author, authorDetails, title, lang, logo, twitter, facebook } = siteMetadata;

  const siteLogo = logo && logo.childImageSharp && logo.childImageSharp.fluid && logo.childImageSharp.fluid.src;

  const pageTitle = (props.mdxMeta && props.mdxMeta.title) || props.title;
  const pageTitleFull = pageTitle || title;
  const pageDescription = props.description || description;
  const pageImage = (props.mdxMeta && props.mdxMeta.image && props.mdxMeta.image.childImageSharp && props.mdxMeta.image.childImageSharp.fluid && props.mdxMeta.image.childImageSharp.fluid.src) || siteLogo;
  const pageImageAbsolute = pageImage && Url.resolve(siteUrl, pageImage);
  const pageUrl = (props.mdxMeta && props.mdxMeta.url) || props.url;
  const pageUrlAbsolute = pageUrl && Url.resolve(siteUrl, pageUrl);

  const metaProps: MetaProps[] = [];

  const pushNameMeta = (name: string, content?: string | null): void => {
    if (content) metaProps.push({ name, content });
  };

  const pushPropertyMeta = (property: string, content?: string | null): void => {
    if (content) metaProps.push({ property, content });
  };

  pushNameMeta('description', pageDescription);
  pushNameMeta('author', author);

  pushPropertyMeta('og:type', 'website'); // <-- this needs to change!!!
  pushPropertyMeta('og:site_name', title);
  pushPropertyMeta('og:title', pageTitleFull);
  pushPropertyMeta('og:description', pageDescription);
  pushPropertyMeta('og:url', pageUrlAbsolute);
  pushPropertyMeta('og:image', pageImageAbsolute);
  pushPropertyMeta('og:locale', lang && lang.replace('-', '_'));

  if (facebook) {
    pushPropertyMeta('fb:admins', facebook.admins);
    pushPropertyMeta('fb:app_id', facebook.appId);

    if (props.mdxMeta) {
      pushPropertyMeta('article:publisher', facebook.publisher);

      pushPropertyMeta('article:published_time', props.mdxMeta.date);

      pushPropertyMeta('article:modified_time', props.mdxMeta.lastModified);

      if (props.mdxMeta.tags) props.mdxMeta.tags.map(x => pushPropertyMeta('article:tag', x));
    }
  }

  if (twitter) {
    pushNameMeta('twitter:card', 'summary');
    pushNameMeta('twitter:site', twitter.username ? `@${twitter.username}` : undefined);
    pushNameMeta('twitter:creator', authorDetails && authorDetails.twitter ? `@${authorDetails.twitter}` : twitter.username ? `@${twitter.username}` : undefined);
    pushNameMeta('twitter:title', pageTitleFull);
    pushNameMeta('twitter:description', pageDescription);
    pushNameMeta('twitter:url', pageUrlAbsolute);
    pushNameMeta('twitter:image', pageImageAbsolute);
    pushNameMeta('twitter:label1', 'Written by');
    pushNameMeta('twitter:data1', author);

    if (props.mdxMeta && props.mdxMeta.categories) {
      pushNameMeta('twitter:label2', 'Filed under');
      pushNameMeta('twitter:data2', props.mdxMeta.categories.join(', '));
    }
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
        prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article# website: http://ogp.me/ns/website#',
      }}
      title={pageTitle}
      titleTemplate={`%s – ${title}`}
      defaultTitle={`${title} – ${description}`}
      meta={metaProps.concat(props.metaProps || [])}
    />
  );
};

Head.defaultProps = {
  title: '',
  description: '',
};

export default Head;
