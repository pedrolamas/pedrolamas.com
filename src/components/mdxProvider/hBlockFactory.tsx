import React from 'react';
import { Location } from '@reach/router';
import { slugify } from 'underscore.string';

import Link from '../link';
import MdxContext from '../mdxContext';
import { Utils } from '../../utils';

type HBlockType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const HBlockFactory = <T extends HBlockType>(headerBlock: T): React.FunctionComponent<React.ComponentPropsWithoutRef<T>> => {
  return ({ children, ...restOfProps }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { meta } = React.useContext(MdxContext);

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
          <Location>{locationContext => <Link to={`${meta.url || locationContext.location.pathname}#${slug}`} className="anchor" aria-labelledby={slug} />}</Location>
        </>
      );
    }

    return React.createElement(headerBlock, restOfProps, children);
  };
};

export default HBlockFactory;
