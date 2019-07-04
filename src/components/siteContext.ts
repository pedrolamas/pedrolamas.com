import React from 'react';

import { GraphQl } from '../utils';

type SiteContextProps = {
  siteMetadata?: GraphQl.RootLayoutQuery extends { dataYaml: infer T } ? T : unknown;
};

const SiteContext = React.createContext<SiteContextProps>({
  siteMetadata: undefined,
});

export default SiteContext;
