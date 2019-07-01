import React from 'react';
import { Helmet } from 'react-helmet';

import SiteContext from './siteContext';

type MetaProps = JSX.IntrinsicElements['meta'];

type HeadProps = {
  title?: string;
  description?: string;
  meta?: MetaProps[];
};

const Head: React.FunctionComponent<HeadProps> = props => (
  <SiteContext.Consumer>
    {siteContext => {
      const { siteMetadata } = siteContext;

      if (!siteMetadata || !siteMetadata.author) {
        return null;
      }

      const metaDescription = props.description || siteMetadata.description;

      const metaProps: MetaProps[] = [
        {
          name: `description`,
          content: metaDescription || undefined,
        },
        {
          name: `author`,
          content: siteMetadata.author.name || undefined,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: metaDescription || undefined,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: siteMetadata.title || undefined,
        },
        {
          property: `og:locale`,
          content: (siteMetadata.lang || 'en').replace('-', '_'),
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author.name || undefined,
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription || undefined,
        },
      ];

      return (
        <Helmet
          htmlAttributes={{
            lang: siteMetadata.lang,
          }}
          title={props.title}
          titleTemplate={`%s – ${siteMetadata.title}`}
          defaultTitle={`${siteMetadata.title} – ${siteMetadata.description}`}
          meta={metaProps.concat(props.meta || [])}
        />
      );
    }}
  </SiteContext.Consumer>
);

Head.defaultProps = {
  title: '',
  description: '',
};

export default Head;
