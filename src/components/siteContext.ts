import React from 'react';
import { DataYaml } from '../generated/graphql';

type SiteContextProps = {
  siteMetadata?: DataYaml;
}

const SiteContext = React.createContext<SiteContextProps>({
  siteMetadata: undefined
});

export default SiteContext;
