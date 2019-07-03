import React from 'react';

import PostLayoutNavigationItem from './postLayoutNavigationItem';
import { SiblingPostMdxFragment } from '../../../generated/graphql';

type PostLayoutNavigationProps = {
  previousMdx?: SiblingPostMdxFragment;
  nextMdx?: SiblingPostMdxFragment;
  children?: never;
};

const PostLayoutNavigation: React.FunctionComponent<PostLayoutNavigationProps> = ({ previousMdx, nextMdx }) => {
  if (!previousMdx && !nextMdx) return null;

  return (
    <nav className="post-navigation" role="navigation">
      {previousMdx && <PostLayoutNavigationItem label="Previous" mdx={previousMdx} />}
      {nextMdx && <PostLayoutNavigationItem label="Next" mdx={nextMdx} />}
    </nav>
  );
};

export default PostLayoutNavigation;
