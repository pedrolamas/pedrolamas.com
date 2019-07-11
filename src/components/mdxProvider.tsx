import React from 'react';
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react';

import CodeBlock from './codeBlock';
import Link from './link';

const ABlock: React.FunctionComponent<React.ComponentPropsWithoutRef<'a'>> = props => {
  var { href, ...restOfProps } = props;

  if (href) {
    return <Link to={href} {...restOfProps} />;
  }

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...props} />;
};

const PreBlock: React.FunctionComponent<React.ComponentPropsWithoutRef<'pre'>> = props => {
  const { children } = props;

  const child = children as React.ReactElement<{ originalType?: string }>;

  if (child && child.props && child.props.originalType === 'code') {
    return child;
  }

  return <pre {...props} />;
};

const MdxProviderComponents: MDXProviderComponents = {
  a: ABlock,
  code: CodeBlock,
  pre: PreBlock,
};

type MdxProviderProps = {
  children: React.ReactNode;
};

const MdxProvider: React.FunctionComponent<MdxProviderProps> = ({ children }) => <MDXProvider components={MdxProviderComponents}>{children}</MDXProvider>;

export default MdxProvider;
