import React from 'react';

import MdxContext from '../../mdxContext';
import Link from '../../link';
import * as Utils from '../../../utils';

type MdxArticleMetaCategoriesProps = {
  children?: never;
};

const MdxArticleMetaCategories: React.FunctionComponent<MdxArticleMetaCategoriesProps> = () => (
  <MdxContext.Consumer>
    {mdx => {
      if (!mdx) return null;

      const { frontmatter } = mdx;

      const categories = frontmatter && frontmatter.categories;

      return (
        <>
          {categories && (
            <span className="categories">
              <span className="screen-reader-text">Categories </span>
              {categories.map((category, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ', '}
                  <Link to={`/category/${Utils.Slug(category || '')}/`} rel="category tag">
                    {category}
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

export default MdxArticleMetaCategories;
