import React from 'react';
import { MDXRenderer } from 'gatsby-mdx';

import MdxProvider from './mdxProvider';
import { Mdx } from '../generated/graphql';

type MdxRendererProps = {
  children: Mdx;
}

const MdxRenderer: React.FunctionComponent<MdxRendererProps> = ({ children }) => (
  <>
    {children.code && children.code.body &&
      <MdxProvider>
        <MDXRenderer>{children.code.body}</MDXRenderer>
      </MdxProvider>
    }
  </>
)

export default MdxRenderer;
