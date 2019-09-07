import React from 'react';

import Link from '../../../link';
import FontAwesomeSymbol from '../../../fontAwesomeSymbol';
import { FontAwesome } from '../../../../utils';

type SidebarSocialLinkProps = {
  url: string;
  title: string;
  symbolName: FontAwesome.SymbolNames;
};

const SidebarSocialLink: React.FunctionComponent<SidebarSocialLinkProps> = ({ url, title, symbolName }) => (
  <Link to={url} className="sidebar-social-item" title={title}>
    <FontAwesomeSymbol symbolName={symbolName} />
    <span className="screen-reader-text">{title}</span>
  </Link>
);

export default SidebarSocialLink;
