import React from 'react';

import { GraphQl } from '../utils';

type SiteType = GraphQl.RootLayoutQuery extends { site: infer T } ? NonNullable<T> : unknown;
type SiteMetadataType = SiteType extends { siteMetadata: infer T } ? NonNullable<T> : unknown;

type SiteContextProps = {
  siteMetadata?: SiteMetadataType;
};

const SiteContext = React.createContext<SiteContextProps>({
  siteMetadata: undefined,
});

export default SiteContext;
