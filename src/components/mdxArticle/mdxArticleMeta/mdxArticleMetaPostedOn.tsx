import React from 'react';

import Link from '../../link';
import FontAwesomeSymbol from '../../fontAwesomeSymbol';
import MdxContext from '../../mdxContext';

type MdxArticleMetaPostedOnProps = {
  children?: never;
};

const MdxArticleMetaPostedOn: React.FunctionComponent<MdxArticleMetaPostedOnProps> = () => {
  const { meta } = React.useContext(MdxContext);

  const { url, date, dateFormatted } = meta;

  return (
    <>
      {date && (
        <span className="posted-on">
          <FontAwesomeSymbol symbolName="article-posted-on" />

          <span className="screen-reader-text">Posted on </span>

          <Link to={url} rel="bookmark">
            <time dateTime={date}>{dateFormatted}</time>
          </Link>
        </span>
      )}
    </>
  );
};

MdxArticleMetaPostedOn.displayName = 'MdxArticleMetaPostedOn';

export default MdxArticleMetaPostedOn;
