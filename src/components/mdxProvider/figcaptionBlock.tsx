import React from 'react';

import FontAwesomeSymbol from '../fontAwesomeSymbol';

type FigcaptionBlockProps = React.ComponentPropsWithoutRef<'figcaption'>;

const FigcaptionBlock: React.FunctionComponent<FigcaptionBlockProps> = (props) => {
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
