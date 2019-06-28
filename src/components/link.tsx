import React, { ComponentProps } from 'react';
import { Link as GatsbyLink } from 'gatsby';

type LinkProps = Omit<ComponentProps<typeof GatsbyLink>, 'ref'>;

const Link: React.FunctionComponent<LinkProps> = (props) => {
  return (<>
    {props.to && !props.to.includes(":") && !props.to.startsWith("//")
      ? <GatsbyLink {...props} />
      // eslint-disable-next-line
      : <a href={props.to} {...props} />}
  </>);
};

export default Link;
