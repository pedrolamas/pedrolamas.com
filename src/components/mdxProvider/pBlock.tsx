import React from 'react';

type PBlockProps = React.ComponentPropsWithoutRef<'p'>;

const PBlock: React.FunctionComponent<PBlockProps> = (props) => {
  const { children } = props;

  const child = children as React.ReactElement<{ originalType?: string }>;

  if (child?.props?.originalType === 'figure') {
    return <>{children}</>;
  }

  return <p {...props} />;
};

PBlock.displayName = 'PBlock';

export default PBlock;
