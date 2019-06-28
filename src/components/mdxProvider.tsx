import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Link from './link';
import CodeBlock from './codeBlock';

const PreBlock: React.FunctionComponent<any> = (props) => {
  const { children } = props;

  const childType = children && children.props && children.props.originalType;

  if (childType === "code") {
    return children;
  }

  return <pre {...props} />;
}

const MdxProviderComponents = {
  a: Link,
  code: CodeBlock,
  pre: PreBlock,
};

type MdxProviderProps = {
  children: React.ReactNode;
}

const MdxProvider: React.FunctionComponent<MdxProviderProps> = ({ children }) => (
  <MDXProvider components={MdxProviderComponents}>
    {children}
  </MDXProvider>
)

export default MdxProvider;
