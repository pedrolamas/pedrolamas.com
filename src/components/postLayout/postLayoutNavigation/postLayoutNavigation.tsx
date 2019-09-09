import React from 'react';

import PostLayoutNavigationItem from './postLayoutNavigationItem';
import { GraphQl } from '../../../utils';

type PostLayoutNavigationProps = {
  previousMdx?: GraphQl.SiblingPostMdxFragment;
  nextMdx?: GraphQl.SiblingPostMdxFragment;
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

PostLayoutNavigation.displayName = 'PostLayoutNavigation';

export default PostLayoutNavigation;
