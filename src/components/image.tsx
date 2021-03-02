import React from 'react';
import Img, { FluidObject, FixedObject } from 'gatsby-image';

import { GraphQl } from '../utils';

type ImageProps = Omit<React.ComponentPropsWithoutRef<typeof Img>, 'fixed' | 'fluid'> & {
  imageSharp: {
    fixed?: GraphQl.Maybe<Partial<GraphQl.ImageSharpFixed>>;
    fluid?: GraphQl.Maybe<Partial<GraphQl.ImageSharpFluid>>;
  };
};

const Image: React.FunctionComponent<ImageProps> = ({ imageSharp, style, ...restOfProps }) => {
  const { fixed, fluid } = imageSharp;

  const newStyle: React.CSSProperties = {
    ...style,
    maxWidth: fluid?.presentationWidth || undefined,
    maxHeight: fluid?.presentationHeight || undefined,
  };

  return <Img fixed={fixed as FixedObject} fluid={fluid as FluidObject} style={newStyle} {...restOfProps} />;
};

Image.displayName = 'Image';

export default Image;
