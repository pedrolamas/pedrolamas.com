import React from 'react';

import MdxRenderer from '../mdxRenderer';
import MdxContext from '../mdxContext';

type MdxArticleContentProps = {
  children?: never;
};

const MdxArticleContent: React.FunctionComponent<MdxArticleContentProps> = () => {
  const { mdx } = React.useContext(MdxContext);

  return (
    <>
      {mdx && (
        <div className="post-content">
          <MdxRenderer>{mdx}</MdxRenderer>
        </div>
      )}
    </>
  );
};

export default MdxArticleContent;
