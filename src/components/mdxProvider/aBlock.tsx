import React from 'react';

import Link from '../link';

type ABlockProps = React.ComponentPropsWithoutRef<'a'>;

const ABlock: React.FunctionComponent<ABlockProps> = (props) => {
  const { href, ...restOfProps } = props;

  if (href) {
    return <Link to={href} {...restOfProps} />;
  }

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...props} />;
};

ABlock.displayName = 'ABlock';

export default ABlock;
