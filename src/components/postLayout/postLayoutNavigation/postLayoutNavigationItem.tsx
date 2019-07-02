import React from 'react';

import Link from '../../link';
import { Mdx } from '../../../generated/graphql';

type PostLayoutNavigationItemProps = {
  label: string;
  mdx: Mdx;
  children?: never;
};

const PostLayoutNavigationItem: React.FunctionComponent<PostLayoutNavigationItemProps> = ({ label, mdx }) => {
  const { fields, frontmatter } = mdx;

  const title = (frontmatter && frontmatter.title) || '(untitled)';
  const dateFormatted = frontmatter && frontmatter.dateFormatted;
  const url = (fields && fields.slug) || '';

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
