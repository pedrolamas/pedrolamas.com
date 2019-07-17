import React from 'react';

import MdxRenderer from '../mdxRenderer';
import MdxContext from '../mdxContext';

type MdxArticleContentProps = {
  children?: never;
};

const MdxArticleContent: React.FunctionComponent<MdxArticleContentProps> = () => (
  <MdxContext.Consumer>
    {mdxContext => (
      <>
        {mdxContext.mdx && (
          <div className="post-content">
            <MdxRenderer>{mdxContext.mdx}</MdxRenderer>
          </div>
        )}
      </>
    )}
  </MdxContext.Consumer>
);

export default MdxArticleContent;
