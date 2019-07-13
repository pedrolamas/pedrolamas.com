import React from 'react';
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react';

import ABlock from './aBlock';
import CodeBlock from './codeBlock';
import PreBlock from './preBlock';
import HBlockFactory from './hBlockFactory';

const MdxProviderComponents: MDXProviderComponents = {
  a: ABlock,
  code: CodeBlock,
  pre: PreBlock,
  h1: HBlockFactory('h1'),
  h2: HBlockFactory('h2'),
  h3: HBlockFactory('h3'),
  h4: HBlockFactory('h4'),
};

type MdxProviderProps = {
  children: React.ReactNode;
};

const MdxProvider: React.FunctionComponent<MdxProviderProps> = ({ children }) => <MDXProvider components={MdxProviderComponents}>{children}</MDXProvider>;

export default MdxProvider;
