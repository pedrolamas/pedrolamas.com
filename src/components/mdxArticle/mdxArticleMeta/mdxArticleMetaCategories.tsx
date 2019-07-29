import React from 'react';

import MdxContext from '../../mdxContext';
import Link from '../../link';
import { Utils } from '../../../utils';

type MdxArticleMetaCategoriesProps = {
  children?: never;
};

const MdxArticleMetaCategories: React.FunctionComponent<MdxArticleMetaCategoriesProps> = () => {
  const { meta } = React.useContext(MdxContext);

  const { categories } = meta;

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
};

export default MdxArticleMetaCategories;
