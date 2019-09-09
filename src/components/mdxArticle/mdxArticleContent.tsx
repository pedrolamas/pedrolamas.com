import React from 'react';

import MdxRenderer from '../mdxRenderer';
import MdxContext from '../mdxContext';

type MdxArticleContentProps = {
  children?: never;
};

const MdxArticleContent: React.FunctionComponent<MdxArticleContentProps> = () => {
  const { mdx } = React.useContext(MdxContext);

  if (!mdx) return null;

  return (
    <div className="post-content">
      <MdxRenderer>{mdx}</MdxRenderer>
    </div>
  );
};

MdxArticleContent.displayName = 'MdxArticleContent';

export default MdxArticleContent;
