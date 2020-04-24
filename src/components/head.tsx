import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import Url from 'url';

import SiteContext from './siteContext';

type MetaProps = JSX.IntrinsicElements['meta'];

type HeadProps = {
  type: 'index' | 'page' | 'post';
  title?: string;
  description?: string;
  imageUrl?: string;
  categories?: string[];
  tags?: string[];
  date?: string;
  lastModified?: string;
  metaProps?: MetaProps[];
};

const Head: React.FunctionComponent<HeadProps> = (props) => {
  const { siteMetadata } = React.useContext(SiteContext);
  const location = useLocation();

  if (!siteMetadata) return null;

  const { siteUrl, description, author, authorDetails, title, lang, logo, twitter, facebook } = siteMetadata;

  const siteLogoUrl = logo && logo.publicURL && Url.resolve(siteUrl, logo.publicURL);
  const authorPictureUrl = authorDetails && authorDetails.picture && authorDetails.picture.publicURL && Url.resolve(siteUrl, authorDetails.picture.publicURL);

  const pageTitle = props.title || title;
  const pageDescription = props.description || description;
  const pageImageUrl = (props.imageUrl && Url.resolve(siteUrl, props.imageUrl)) || siteLogoUrl;

  const pageUrl = Url.resolve(siteUrl, location.pathname);

  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': props.type === 'index' ? 'WebSite' : props.type === 'page' ? 'WebPage' : 'BlogPosting',
    name: title,
    headline: pageTitle,
    description: pageDescription,
    publisher: {
      '@type': 'Organization',
      name: title,
      logo: siteLogoUrl,
    },
    author: {
      '@type': 'Person',
      name: author,
      image: authorPictureUrl,
      // sameAs: sidebar && sidebar.
    },
    image: pageImageUrl,
    datePublished: props.date,
    dateModified: props.lastModified || props.date,
    url: pageUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteUrl,
    },
  };

  return (
    <>
      <Helmet title={props.title} titleTemplate={`%s – ${title}`} defaultTitle={`${title} – ${description}`} defer={false}>
        <html lang={lang || 'en'} prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article# website: http://ogp.me/ns/website#" />

        {pageDescription && <meta name="description" content={pageDescription} />}
        <meta name="author" content={author} />

        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content={props.type === 'index' ? 'website' : 'article'} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:url" content={pageUrl} />
        {pageDescription && <meta property="og:description" content={pageDescription} />}
        {pageImageUrl && <meta property="og:image" content={pageImageUrl} />}
        {lang && <meta property="og:locale" content={lang.replace('-', '_')} />}

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {facebook && (
        <>
          <Helmet defer={false}>
            {facebook.admins && <meta property="fb:admins" content={facebook.admins} />}
            {facebook.appId && <meta property="fb:app_id" content={facebook.appId} />}
          </Helmet>

          {props.type !== 'index' && (
            <Helmet defer={false}>
              {facebook.publisher && <meta property="article:publisher" content={facebook.publisher} />}
              {props.date && <meta property="article:published_time" content={props.date} />}
              {props.lastModified && <meta property="article:modified_time" content={props.lastModified} />}
              {props.tags && props.tags.map((meta, index) => <meta property="article:tag" content={meta} key={index} />)}
            </Helmet>
          )}
        </>
      )}

      {twitter && (
        <>
          <Helmet defer={false}>
            <meta name="twitter:url" content={pageUrl} />
            <meta name="twitter:card" content={props.imageUrl ? 'summary_large_image' : 'summary'} />
            <meta name="twitter:site" content={`@${twitter.username}`} />
            <meta name="twitter:creator" content={authorDetails && authorDetails.twitter ? `@${authorDetails.twitter}` : `@${twitter.username}`} />
            <meta name="twitter:title" content={pageTitle} />
            {pageDescription && <meta name="twitter:description" content={pageDescription} />}
            {pageImageUrl && <meta name="twitter:image" content={pageImageUrl} />}
            <meta name="twitter:label1" content="Written by" />
            <meta name="twitter:data1" content={author} />
          </Helmet>

          {props.categories && (
            <Helmet defer={false}>
              <meta name="twitter:label2" content="Filed under" />
              <meta name="twitter:data2" content={props.categories.join(', ')} />
            </Helmet>
          )}
        </>
      )}
    </>
  );
};

Head.displayName = 'Head';

Head.defaultProps = {
  title: '',
  description: '',
};

export default Head;
