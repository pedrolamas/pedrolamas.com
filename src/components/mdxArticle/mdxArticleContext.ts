import React from 'react';

import { Mdx } from '../../generated';

const MdxArticleContext = React.createContext<Mdx | undefined>(undefined);

export default MdxArticleContext;
