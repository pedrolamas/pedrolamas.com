import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useLocation } from '@reach/router';
import Url from 'url';

type LinkProps = React.ComponentPropsWithoutRef<typeof GatsbyLink>;

const isInternal = (url: string): boolean => !url.includes(':') && !url.startsWith('//');
const isFile = (url: string): boolean => /\.[0-9a-z]+$/i.test(url);

const linkStyle: React.CSSProperties | undefined = process.env.NODE_ENV === 'development' ? { color: '#ff0000' } : undefined;

const Link: React.FunctionComponent<LinkProps> = (props) => {
  const { to, ...restOfProps } = props;

  const location = useLocation();

  return (
    <>
      {to && isInternal(to) && !isFile(to) ? (
        <GatsbyLink style={linkStyle} to={Url.resolve(location.pathname, to)} {...restOfProps} />
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a href={to} {...restOfProps} />
      )}
    </>
  );
};

Link.displayName = 'Link';

export default Link;
