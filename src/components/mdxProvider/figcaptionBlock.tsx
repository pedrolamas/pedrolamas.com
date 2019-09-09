import React from 'react';

import FontAwesomeSymbol from '../fontAwesomeSymbol';

const FigcaptionBlock: React.FunctionComponent<React.ComponentPropsWithoutRef<'figcaption'>> = props => {
  const { children, ...otherProps } = props;

  return (
    <figcaption {...otherProps}>
      <FontAwesomeSymbol symbolName="figure-caption" />
      {children}
    </figcaption>
  );
};

FigcaptionBlock.displayName = 'FigcaptionBlock';

export default FigcaptionBlock;
