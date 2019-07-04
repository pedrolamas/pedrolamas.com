import React from 'react';

import MdxContext from '../../mdxContext';
import Link from '../../link';
import { Utils } from '../../../utils';

type MdxArticleMetaTagsProps = {
  children?: never;
};

const MdxArticleMetaTags: React.FunctionComponent<MdxArticleMetaTagsProps> = () => (
  <MdxContext.Consumer>
    {mdx => {
      if (!mdx) return null;

      const { frontmatter } = mdx;

      const tags = frontmatter && frontmatter.tags;

      return (
        <>
          {tags && (
            <span className="tags">
              <span className="screen-reader-text">Tags </span>
              {tags.map((tag, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ', '}
                  <Link to={`/tag/${Utils.Slug(tag || '')}/`} rel="tag">
                    {tag}
                  </Link>
                </React.Fragment>
              ))}
            </span>
          )}
        </>
      );
    }}
  </MdxContext.Consumer>
);

export default MdxArticleMetaTags;
