import React from 'react';

import Link from '../../link';
import * as Utils from '../../../utils';
import { Mdx } from '../../../generated/graphql';

type PostLayoutNavigationItemProps = {
  label: string;
  mdx: Mdx;
  children?: never;
};

const PostLayoutNavigationItem: React.FunctionComponent<PostLayoutNavigationItemProps> = ({ label, mdx }) => {
  const { title, url, dateFormatted } = Utils.SafeMetadataFromMdx(mdx);

  return (
    <>
      <h2 aria-hidden="true">{label}</h2>
      <span className="screen-reader-text">{`${label} post:`}</span>
      <h3 className="post-entry">
        <Link to={url} title={`${label} Post: ${title}`}>
          {title} <small>{dateFormatted}</small>
        </Link>
      </h3>
    </>
  );
};

export default PostLayoutNavigationItem;
