import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { GraphQl } from '../utils';

type ImageDataLike = typeof getImage extends (param: infer T) => unknown ? T : unknown;

type ImageProps = Omit<React.ComponentPropsWithoutRef<typeof GatsbyImage>, 'image'> & {
  imageSharp: GraphQl.Maybe<Pick<GraphQl.File, 'publicURL'> & { childImageSharp?: GraphQl.Maybe<Pick<GraphQl.ImageSharp, 'gatsbyImageData'>> }>;
};

const Image: React.FunctionComponent<ImageProps> = ({ imageSharp, ...restOfProps }) => {
  const image = getImage(imageSharp as ImageDataLike);

  if (!image) return null;

  return <GatsbyImage image={image} {...restOfProps} />;
};

Image.displayName = 'Image';

export default Image;
