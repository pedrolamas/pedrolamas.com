import React from 'react';

const PreBlock: React.FunctionComponent<React.ComponentPropsWithoutRef<'pre'>> = props => {
  const { children } = props;

  const child = children as React.ReactElement<{ originalType?: string }>;

  if (child && child.props && child.props.originalType === 'code') {
    return child;
  }

  return <pre {...props} />;
};

export default PreBlock;
