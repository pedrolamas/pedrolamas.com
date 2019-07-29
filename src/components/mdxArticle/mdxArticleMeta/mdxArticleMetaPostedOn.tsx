import React from 'react';

import MdxContext from '../../mdxContext';
import Link from '../../link';

type MdxArticleMetaPostedOnProps = {
  children?: never;
};

const MdxArticleMetaPostedOn: React.FunctionComponent<MdxArticleMetaPostedOnProps> = () => {
  const { meta } = React.useContext(MdxContext);

  const { url, date, dateFormatted } = meta;

  return (
    <span className="posted-on">
      <span className="screen-reader-text">Posted on </span>
      <Link to={url} rel="bookmark">
        <time dateTime={date}>{dateFormatted}</time>
      </Link>
    </span>
  );
};

export default MdxArticleMetaPostedOn;
