import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MdxContext from '../../mdxContext';
import Link from '../../link';
import { Utils } from '../../../utils';

type MdxArticleMetaTagsProps = {
  children?: never;
};

const MdxArticleMetaTags: React.FunctionComponent<MdxArticleMetaTagsProps> = () => {
  const { meta } = React.useContext(MdxContext);

  const { tags } = meta;

  return (
    <>
      {tags && (
        <span className="tags">
          <FontAwesomeIcon icon="tags" />
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
};

export default MdxArticleMetaTags;
