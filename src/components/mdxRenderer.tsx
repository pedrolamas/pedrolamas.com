import React from 'react';
import { MDXRenderer } from 'gatsby-mdx';

import MdxProvider from './mdxProvider';
import { GraphQl } from '../utils';

type MdxRendererProps = {
  children: {
    code?: GraphQl.Maybe<Pick<GraphQl.MdxCodeMdx, 'body'>>;
  };
};

const MdxRenderer: React.FunctionComponent<MdxRendererProps> = ({ children }) => (
  <>
    {children.code && children.code.body && (
      <MdxProvider>
        <MDXRenderer>{children.code.body}</MDXRenderer>
      </MdxProvider>
    )}
  </>
);

export default MdxRenderer;
