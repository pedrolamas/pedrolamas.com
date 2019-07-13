import React from 'react';
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react';

import ABlock from './aBlock';
import CodeBlock from './codeBlock';
import PreBlock from './preBlock';
import HeaderBlockFactory from './headerBlockFactory';

const MdxProviderComponents: MDXProviderComponents = {
  a: ABlock,
  code: CodeBlock,
  pre: PreBlock,
  h1: HeaderBlockFactory('h1'),
  h2: HeaderBlockFactory('h2'),
  h3: HeaderBlockFactory('h3'),
  h4: HeaderBlockFactory('h4'),
};

type MdxProviderProps = {
  children: React.ReactNode;
};

const MdxProvider: React.FunctionComponent<MdxProviderProps> = ({ children }) => <MDXProvider components={MdxProviderComponents}>{children}</MDXProvider>;

export default MdxProvider;
