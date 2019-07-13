import React from 'react';
import { slugify } from 'underscore.string';

import { Utils } from '../../utils';

type HBlockType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const HBlockFactory = <T extends HBlockType>(headerBlock: T): React.FunctionComponent<React.ComponentPropsWithoutRef<T>> => {
  return ({ children, ...restOfProps }) => {
    if (Utils.IsString(children)) {
      const slug = slugify(children);

      return React.createElement(
        headerBlock,
        {
          ...restOfProps,
          id: slug,
        },
        <>
          {children}
          <a href={`#${slug}`}>#</a>
        </>
      );
    }

    return React.createElement(headerBlock, restOfProps, children);
  };
};

export default HBlockFactory;
