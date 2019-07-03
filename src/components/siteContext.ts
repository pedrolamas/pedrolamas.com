import React from 'react';
import { RootLayoutQuery } from '../generated/graphql';

type SiteContextProps = {
  siteMetadata?: RootLayoutQuery extends { dataYaml: infer T } ? T : unknown;
};

const SiteContext = React.createContext<SiteContextProps>({
  siteMetadata: undefined,
});

export default SiteContext;
