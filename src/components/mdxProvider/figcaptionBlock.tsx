import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FigCaptionBlock: React.FunctionComponent<React.ComponentPropsWithoutRef<'figcaption'>> = props => {
  const { children, ...otherProps } = props;

  return (
    <figcaption {...otherProps}>
      <FontAwesomeIcon icon="info" />
      {children}
    </figcaption>
  );
};

export default FigCaptionBlock;
