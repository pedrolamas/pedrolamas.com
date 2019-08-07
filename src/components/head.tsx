import React from 'react';
import Helmet from 'react-helmet';
import { Location } from '@reach/router';
import Url from 'url';

import SiteContext from './siteContext';
import { Utils } from '../utils';

type MetaProps = JSX.IntrinsicElements['meta'];

type HeadProps = {
  title?: string;
  description?: string;
  mdxMeta?: Utils.SafeMdxMetadata;
  metaProps?: MetaProps[];
};

const Head: React.FunctionComponent<HeadProps> = props => {
  const { siteMetadata } = React.useContext(SiteContext);

  if (!siteMetadata) return null;

  const { siteUrl, description, author, authorDetails, title, lang, logo, twitter, facebook } = siteMetadata;

  const siteLogo = logo && logo.publicURL;

  const pageTitle = (props.mdxMeta && props.mdxMeta.title) || props.title;
  const pageTitleFinal = pageTitle || title;
  const pageDescription = props.description || (props.mdxMeta && props.mdxMeta.excerpt) || description;
  const pageImageUrl = props.mdxMeta && props.mdxMeta.image && props.mdxMeta.image.publicURL;
  const pageImageUrlFinal = pageImageUrl || siteLogo;
  const pageImageUrlFinalAbsolute = pageImageUrlFinal && Url.resolve(siteUrl, pageImageUrlFinal);

  const authorPictureUrlAbsolute = authorDetails && authorDetails.picture && authorDetails.picture.publicURL && Url.resolve(siteUrl, authorDetails.picture.publicURL);

  return (
    <>
      <Helmet title={pageTitle} titleTemplate={`%s – ${title}`} defaultTitle={`${title} – ${description}`} defer={false}>
        <html lang={lang || 'en'} prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article# website: http://ogp.me/ns/website#" />

        {pageDescription && <meta name="description" content={pageDescription} />}
        <meta name="author" content={author} />

        <meta property="og:type" content={pageTitle ? 'article' : 'website'} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={pageTitleFinal} />
        {pageDescription && <meta property="og:description" content={pageDescription} />}
        {pageImageUrlFinalAbsolute && <meta property="og:image" content={pageImageUrlFinalAbsolute} />}
        {lang && <meta property="og:locale" content={lang.replace('-', '_')} />}
      </Helmet>

      {facebook && (
        <>
          <Helmet defer={false}>
            {facebook.admins && <meta property="fb:admins" content={facebook.admins} />}
            {facebook.appId && <meta property="fb:app_id" content={facebook.appId} />}
          </Helmet>

          {props.mdxMeta && (
            <Helmet defer={false}>
              {facebook.publisher && <meta property="article:publisher" content={facebook.publisher} />}
              <meta property="article:published_time" content={props.mdxMeta.date} />
              <meta property="article:modified_time" content={props.mdxMeta.lastModified} />
              {props.mdxMeta.tags && props.mdxMeta.tags.map((meta, index) => <meta property="article:tag" content={meta} key={index} />)}
            </Helmet>
          )}
        </>
      )}

      {twitter && (
        <>
          <Helmet defer={false}>
            <meta name="twitter:card" content={pageImageUrl ? 'summary_large_image' : 'summary'} />
            <meta name="twitter:site" content={`@${twitter.username}`} />
            <meta name="twitter:creator" content={authorDetails && authorDetails.twitter ? `@${authorDetails.twitter}` : `@${twitter.username}`} />
            <meta name="twitter:title" content={pageTitleFinal} />
            {pageDescription && <meta name="twitter:description" content={pageDescription} />}
            {pageImageUrlFinalAbsolute && <meta name="twitter:image" content={pageImageUrlFinalAbsolute} />}
            <meta name="twitter:label1" content="Written by" />
            <meta name="twitter:data1" content={author} />
          </Helmet>

          {props.mdxMeta && props.mdxMeta.categories && (
            <Helmet defer={false}>
              <meta name="twitter:label2" content="Filed under" />
              <meta name="twitter:data2" content={props.mdxMeta.categories.join(', ')} />
            </Helmet>
          )}
        </>
      )}

      <Location>
        {locationContext => {
          const pageUrlAbsolute = Url.resolve(siteUrl, locationContext.location.pathname);

          const jsonLd = {
            '@context': 'http://schema.org',
            '@type': 'page_ld_type',
            name: title,
            headline: pageTitleFinal,
            description: pageDescription,
            publisher: {
              '@type': 'Organization',
              name: title,
              logo: siteLogo,
            },
            author: {
              '@type': 'Person',
              name: author,
              image: authorPictureUrlAbsolute,
              // sameAs: sidebar && sidebar.
            },
            image: pageImageUrlFinalAbsolute,
            datePublished: props.mdxMeta && props.mdxMeta.date,
            dateModified: props.mdxMeta && (props.mdxMeta.lastModified || props.mdxMeta.date),
            url: pageUrlAbsolute,
            mainEntityOfPage: {
              '@type': pageTitle ? 'WebPage' : 'WebPage',
              '@id': siteUrl,
            },
          };

          return (
            <Helmet defer={false}>
              <link rel="canonical" href={pageUrlAbsolute} />

              <meta property="og:url" content={pageUrlAbsolute} />

              {twitter && <meta name="twitter:url" content={pageUrlAbsolute} />}

              <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>
          );
        }}
      </Location>
    </>
  );
};

Head.defaultProps = {
  title: '',
  description: '',
};

export default Head;
