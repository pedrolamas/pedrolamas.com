import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import MdxProvider from './mdxProvider';
import { GraphQl } from '../utils';

type MdxRendererProps = {
  children: Pick<GraphQl.Mdx, 'body'>;
};

const MdxRenderer: React.FunctionComponent<MdxRendererProps> = ({ children }) => (
  <MdxProvider>
    <MDXRenderer>{children.body}</MDXRenderer>
  </MdxProvider>
);

MdxRenderer.displayName = 'MdxRenderer';

export default MdxRenderer;
