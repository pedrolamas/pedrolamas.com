import React from 'react';
import { Location } from '@reach/router';
import { slugify } from 'underscore.string';

import Link from '../link';
import MdxContext from '../mdxContext';
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
          <Location>{locationContext => <MdxContext.Consumer>{mdxContext => <Link to={`${mdxContext.meta.url || locationContext.location.pathname}#${slug}`} className="anchor" aria-labelledby={slug} />}</MdxContext.Consumer>}</Location>
        </>
      );
    }

    return React.createElement(headerBlock, restOfProps, children);
  };
};

export default HBlockFactory;
