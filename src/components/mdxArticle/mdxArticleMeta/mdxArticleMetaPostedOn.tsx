import React from 'react';

import MdxContext from '../../mdxContext';
import Link from '../../link';
import { Utils } from '../../../utils';

type MdxArticleMetaPostedOnProps = {
  children?: never;
};

const MdxArticleMetaPostedOn: React.FunctionComponent<MdxArticleMetaPostedOnProps> = () => (
  <MdxContext.Consumer>
    {mdx => {
      if (!mdx) return null;

      const { url, date, dateFormatted } = Utils.SafeMetadataFromMdx(mdx);

      return (
        <span className="posted-on">
          <span className="screen-reader-text">Posted on </span>
          <Link to={url} rel="bookmark">
            <time dateTime={date}>{dateFormatted}</time>
          </Link>
        </span>
      );
    }}
  </MdxContext.Consumer>
);

export default MdxArticleMetaPostedOn;
