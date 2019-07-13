import React from 'react';

import Link from '../link';

const ABlock: React.FunctionComponent<React.ComponentPropsWithoutRef<'a'>> = props => {
  const { href, ...restOfProps } = props;

  if (href) {
    return <Link to={href} {...restOfProps} />;
  }

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...props} />;
};

export default ABlock;
