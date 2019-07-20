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

      if (!siteMetadata) return null;

      const { description, author, title, lang } = siteMetadata;

      const metaDescription = props.description || description || undefined;

      const metaProps: MetaProps[] = [
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: author,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:locale`,
          content: (lang || 'en').replace('-', '_'),
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ];

      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={props.title}
          titleTemplate={`%s – ${title}`}
          defaultTitle={`${title} – ${description}`}
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
