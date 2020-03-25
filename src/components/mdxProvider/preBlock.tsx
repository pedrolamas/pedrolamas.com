import React from 'react';

type PreBlockProps = React.ComponentPropsWithoutRef<'pre'>;

const PreBlock: React.FunctionComponent<PreBlockProps> = (props) => {
  const { children } = props;

  const child = children as React.ReactElement<{ originalType?: string }>;

  if (child?.props?.originalType === 'code') {
    return child;
  }

  return <pre {...props} />;
};

PreBlock.displayName = 'PreBlock';

export default PreBlock;
