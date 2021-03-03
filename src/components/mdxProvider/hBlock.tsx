import React from 'react';
import { useLocation } from '@reach/router';
import { slugify } from 'underscore.string';
import innerText from 'react-innertext';

import Link from '../link';
import FontAwesomeSymbol from '../fontAwesomeSymbol';
import MdxContext from '../mdxContext';

type HeaderElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HBlockProps = React.ComponentPropsWithoutRef<HeaderElementType> & {
  headerElementType: HeaderElementType;
};

const HBlock: React.FunctionComponent<HBlockProps> = (props) => {
  const { meta } = React.useContext(MdxContext);
  const location = useLocation();

  const { headerElementType, children, ...restOfProps } = props;
  const HeaderElement = headerElementType;

  const slug = slugify(innerText(children));

  return (
    <HeaderElement id={slug} {...restOfProps}>
      {children}
      <Link to={`${meta.url || location.pathname}#${slug}`} className="anchor" aria-labelledby={slug}>
        <FontAwesomeSymbol symbolName="header-anchor" />
      </Link>
    </HeaderElement>
  );
};

HBlock.displayName = 'HBlock';

const H1Block: React.FunctionComponent<React.ComponentPropsWithoutRef<'h1'>> = (props) => <HBlock headerElementType="h1" {...props} />;

H1Block.displayName = 'H1Block';

const H2Block: React.FunctionComponent<React.ComponentPropsWithoutRef<'h2'>> = (props) => <HBlock headerElementType="h2" {...props} />;

H2Block.displayName = 'H2Block';

const H3Block: React.FunctionComponent<React.ComponentPropsWithoutRef<'h3'>> = (props) => <HBlock headerElementType="h3" {...props} />;

H3Block.displayName = 'H3Block';

const H4Block: React.FunctionComponent<React.ComponentPropsWithoutRef<'h4'>> = (props) => <HBlock headerElementType="h4" {...props} />;

H4Block.displayName = 'H4Block';

const H5Block: React.FunctionComponent<React.ComponentPropsWithoutRef<'h5'>> = (props) => <HBlock headerElementType="h5" {...props} />;

H5Block.displayName = 'H5Block';

const H6Block: React.FunctionComponent<React.ComponentPropsWithoutRef<'h6'>> = (props) => <HBlock headerElementType="h6" {...props} />;

H6Block.displayName = 'H6Block';

// eslint-disable-next-line import/no-anonymous-default-export
export default { H1Block, H2Block, H3Block, H4Block, H5Block, H6Block };
