import React from 'react';

import MdxArticleContext from '../mdxArticleContext';
import Link from '../../link';
import { slug } from '../../../utils';

type MdxArticleMetaTagsProps = {
  children?: never;
}

const MdxArticleMetaTags: React.FunctionComponent<MdxArticleMetaTagsProps> = () => (
  <MdxArticleContext.Consumer>
    {mdx => {
      if (!mdx) return null;

      const { frontmatter } = mdx;

      const tags = frontmatter && frontmatter.tags;

      return (
        <>
          {tags &&
            <span className="tags">
              <span className="screen-reader-text">Tags </span>
              {tags.map((tag, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ", "}
                  <Link to={`/tag/${slug(tag || "")}/`} rel="tag">{tag}</Link>
                </React.Fragment>
              ))}
            </span>
          }
        </>
      );
    }}
  </MdxArticleContext.Consumer>
)

export default MdxArticleMetaTags;
