import React from 'react';

import PostLayoutNavigationItem from './postLayoutNavigationItem';
import { Mdx } from '../../../generated/graphql';

type PostLayoutNavigationProps = {
  previousMdx?: Mdx;
  nextMdx?: Mdx;
  children?: never;
};

const PostLayoutNavigation: React.FunctionComponent<PostLayoutNavigationProps> = ({ previousMdx, nextMdx }) => {
  if (!previousMdx && !nextMdx) return null;

  return (
    <nav className='post-navigation' role='navigation'>
      {previousMdx && <PostLayoutNavigationItem label='Previous' mdx={previousMdx} />}
      {nextMdx && <PostLayoutNavigationItem label='Next' mdx={nextMdx} />}
    </nav>
  );
};

export default PostLayoutNavigation;
