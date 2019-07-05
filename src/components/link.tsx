import React, { ComponentPropsWithoutRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';

type LinkProps = ComponentPropsWithoutRef<typeof GatsbyLink>;

const isInternal = (url: string): boolean => /^\/(?!\/)/.test(url);
const isFile = (url: string): boolean => /\.[0-9a-z]+$/i.test(url);

const Link: React.FunctionComponent<LinkProps> = props => {
  const { to, ...restOfProps } = props;

  return (
    <>
      {to && isInternal(to) && !isFile(to) ? (
        <GatsbyLink style={{ color: '#ff0000' }} {...props} />
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a href={to} {...restOfProps} />
      )}
    </>
  );
};

export default Link;
