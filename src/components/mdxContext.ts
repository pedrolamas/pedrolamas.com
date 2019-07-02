import React from 'react';

import { Mdx } from '../generated';

const MdxContext = React.createContext<Mdx | undefined>(undefined);

export default MdxContext;
