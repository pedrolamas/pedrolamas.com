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

  const { siteUrl, description, author, authorDetails, title, lang, logoFixed500: logo, twitter, facebook } = siteMetadata;

  const siteLogo = logo && logo.childImageSharp && logo.childImageSharp.resize && logo.childImageSharp.resize.src;

  const pageTitle = (props.mdxMeta && props.mdxMeta.title) || props.title;
  const pageTitleFull = pageTitle || title;
  const pageDescription = props.description || description;
  const pageImageUrl = (props.mdxMeta && props.mdxMeta.image && props.mdxMeta.image.childImageSharp && props.mdxMeta.image.childImageSharp.fluid && props.mdxMeta.image.childImageSharp.fluid.src) || siteLogo;
  const pageImageUrlAbsolute = pageImageUrl && Url.resolve(siteUrl, pageImageUrl);

  return (
    <>
      <Helmet title={pageTitle} titleTemplate={`%s – ${title}`} defaultTitle={`${title} – ${description}`}>
        <html lang={lang || 'en'} prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article# website: http://ogp.me/ns/website#" />

        {pageDescription && <meta name="description" content={pageDescription} />}
        <meta name="author" content={author} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={pageTitleFull} />
        {pageDescription && <meta property="og:description" content={pageDescription} />}
        {pageImageUrlAbsolute && <meta property="og:image" content={pageImageUrlAbsolute} />}
        {lang && <meta property="og:locale" content={lang.replace('-', '_')} />}
      </Helmet>

      {facebook && (
        <>
          <Helmet>
            {facebook.admins && <meta property="fb:admins" content={facebook.admins} />}
            {facebook.appId && <meta property="fb:app_id" content={facebook.appId} />}
          </Helmet>

          {props.mdxMeta && (
            <Helmet>
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
          <Helmet>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter.username ? `@${twitter.username}` : undefined} />
            <meta name="twitter:creator" content={authorDetails && authorDetails.twitter ? `@${authorDetails.twitter}` : twitter.username ? `@${twitter.username}` : undefined} />
            <meta name="twitter:title" content={pageTitleFull} />
            {pageDescription && <meta name="twitter:description" content={pageDescription} />}
            {pageImageUrlAbsolute && <meta name="twitter:image" content={pageImageUrlAbsolute} />}
            <meta name="twitter:label1" content="Written by" />
            <meta name="twitter:data1" content={author} />
          </Helmet>

          {props.mdxMeta && props.mdxMeta.categories && (
            <Helmet>
              <meta name="twitter:label2" content="Filed under" />
              <meta name="twitter:data2" content={props.mdxMeta.categories.join(', ')} />
            </Helmet>
          )}
        </>
      )}

      <Location>
        {locationContext => {
          const pageUrlAbsolute = Url.resolve(siteUrl, locationContext.location.pathname);

          return (
            <Helmet>
              <link rel="canonical" href={pageUrlAbsolute} />

              <meta property="og:url" content={pageUrlAbsolute} />

              {twitter && <meta name="twitter:url" content={pageUrlAbsolute} />}
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
