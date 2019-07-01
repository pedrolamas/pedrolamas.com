import React from 'react';

import MdxArticleContext from './mdxArticleContext';
import MdxRenderer from '../mdxRenderer';

type MdxArticleContentProps = {
  children?: never;
};

const MdxArticleContent: React.FunctionComponent<MdxArticleContentProps> = () => (
  <MdxArticleContext.Consumer>
    {mdx => (
      <>
        {mdx && (
          <div className='post-content'>
            <MdxRenderer>{mdx}</MdxRenderer>
          </div>
        )}
      </>
    )}
  </MdxArticleContext.Consumer>
);

export default MdxArticleContent;
