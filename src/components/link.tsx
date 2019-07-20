import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Location } from '@reach/router';
import path from 'path';

type LinkProps = React.ComponentPropsWithoutRef<typeof GatsbyLink>;

const isInternal = (url: string): boolean => !url.includes(':') && !url.startsWith('//');
const isFile = (url: string): boolean => /\.[0-9a-z]+$/i.test(url);

const linkStyle: React.CSSProperties | undefined = process.env.NODE_ENV === 'development' ? { color: '#ff0000' } : undefined;

const Link: React.FunctionComponent<LinkProps> = props => {
  const { to, ...restOfProps } = props;

  return (
    <>
      {to && isInternal(to) && !isFile(to) ? (
        <Location>{locationContext => <GatsbyLink style={linkStyle} to={path.join(path.resolve(locationContext.location.pathname, to), '/')} {...restOfProps} />}</Location>
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a href={to} {...restOfProps} />
      )}
    </>
  );
};

export default Link;
