import React from 'react';

import MdxContext from '../mdxContext';
import MdxRenderer from '../mdxRenderer';

type MdxArticleContentProps = {
  children?: never;
};

const MdxArticleContent: React.FunctionComponent<MdxArticleContentProps> = () => (
  <MdxContext.Consumer>
    {mdx => (
      <>
        {mdx && (
          <div className="post-content">
            <MdxRenderer>{mdx}</MdxRenderer>
          </div>
        )}
      </>
    )}
  </MdxContext.Consumer>
);

export default MdxArticleContent;
