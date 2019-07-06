import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import CodeBlock from './codeBlock';
import Link from './link';

const ABlock: React.FunctionComponent<React.AnchorHTMLAttributes<HTMLAnchorElement>> = props => {
  var { href, ...restOfProps } = props;

  if (href) {
    return <Link to={href} {...restOfProps} />;
  }

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...props} />;
};

const PreBlock: React.FunctionComponent<any> = props => {
  const { children } = props;

  const childType = children && children.props && children.props.originalType;

  if (childType === 'code') {
    return children;
  }

  return <pre {...props} />;
};

const MdxProviderComponents = {
  a: ABlock,
  code: CodeBlock,
  pre: PreBlock,
};

type MdxProviderProps = {
  children: React.ReactNode;
};

const MdxProvider: React.FunctionComponent<MdxProviderProps> = ({ children }) => <MDXProvider components={MdxProviderComponents}>{children}</MDXProvider>;

export default MdxProvider;
