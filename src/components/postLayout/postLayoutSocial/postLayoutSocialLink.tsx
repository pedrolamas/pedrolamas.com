import React from 'react';

import FontAwesomeSymbol from '../../fontAwesomeSymbol';
import { FontAwesome } from '../../../utils';

type PostLayoutSocialLinkProps = {
  name: string;
  label: string;
  link: string;
  symbolName: FontAwesome.SymbolNames;
};

const PostLayoutSocialLink: React.FunctionComponent<PostLayoutSocialLinkProps> = ({ name, label, link, symbolName }) => (
  <a className="post-social-item" href={link} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
    <FontAwesomeSymbol symbolName={symbolName} />
    <span>{name}</span>
  </a>
);

PostLayoutSocialLink.displayName = 'PostLayoutSocialLink';

export default PostLayoutSocialLink;
