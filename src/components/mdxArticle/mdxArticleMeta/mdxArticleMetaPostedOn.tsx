import React from 'react';

import MdxArticleContext from '../mdxArticleContext';
import Link from '../../link';

type MdxArticleMetaPostedOnProps = {
  children?: never;
}

const MdxArticleMetaPostedOn: React.FunctionComponent<MdxArticleMetaPostedOnProps> = () => (
  <MdxArticleContext.Consumer>
    {mdx => {
      if (!mdx) return null;

      const { fields, frontmatter } = mdx;

      const date = frontmatter && frontmatter.date;
      const dateFormatted = frontmatter && frontmatter.dateFormatted;
      const url = fields && fields.slug;

      return (
        <span className="posted-on">
          <span className="screen-reader-text">Posted on </span>
          <Link to={url || ""} rel="bookmark"><time dateTime={date}>{dateFormatted}</time></Link>
        </span>
      );
    }}
  </MdxArticleContext.Consumer>
);

export default MdxArticleMetaPostedOn;
