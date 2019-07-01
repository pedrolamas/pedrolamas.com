import React, { ComponentPropsWithoutRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';

type LinkProps = ComponentPropsWithoutRef<typeof GatsbyLink>;

const Link: React.FunctionComponent<LinkProps> = props => {
  return (
    <>
      {props.to && !props.to.includes(':') && !props.to.startsWith('//') ? (
        <GatsbyLink {...props} />
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a href={props.to} {...props} />
      )}
    </>
  );
};

export default Link;
