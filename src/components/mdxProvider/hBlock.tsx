import React from 'react';
import { Location } from '@reach/router';
import { slugify } from 'underscore.string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from '../link';
import MdxContext from '../mdxContext';
import { Utils } from '../../utils';

type HeaderElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HBlockProps = React.ComponentPropsWithoutRef<HeaderElementType> & {
  headerElementType: HeaderElementType;
};

const HBlock: React.FunctionComponent<HBlockProps> = props => {
  const { meta } = React.useContext(MdxContext);

  const { headerElementType, children, ...restOfProps } = props;

  if (Utils.IsString(children)) {
    const slug = slugify(children);

    return React.createElement(
      headerElementType,
      {
        ...restOfProps,
        id: slug,
      },
      <>
        {children}
        <Location>
          {locationContext => (
            <Link to={`${meta.url || locationContext.location.pathname}#${slug}`} className="anchor" aria-labelledby={slug}>
              <FontAwesomeIcon icon="link" />
            </Link>
          )}
        </Location>
      </>
    );
  }

  return React.createElement('h1', null, null);
};

const H1Block: React.FunctionComponent<React.ComponentPropsWithoutRef<'h1'>> = props => <HBlock headerElementType="h1" {...props} />;

const H2Block: React.FunctionComponent<React.ComponentPropsWithoutRef<'h2'>> = props => <HBlock headerElementType="h2" {...props} />;

const H3Block: React.FunctionComponent<React.ComponentPropsWithoutRef<'h3'>> = props => <HBlock headerElementType="h3" {...props} />;

const H4Block: React.FunctionComponent<React.ComponentPropsWithoutRef<'h4'>> = props => <HBlock headerElementType="h4" {...props} />;

const H5Block: React.FunctionComponent<React.ComponentPropsWithoutRef<'h5'>> = props => <HBlock headerElementType="h5" {...props} />;

const H6Block: React.FunctionComponent<React.ComponentPropsWithoutRef<'h6'>> = props => <HBlock headerElementType="h6" {...props} />;

export default { H1Block, H2Block, H3Block, H4Block, H5Block, H6Block };
