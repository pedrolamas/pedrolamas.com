import React from 'react';

import { GraphQl } from '../utils';

const MdxContext = React.createContext<GraphQl.PostMdxFragment | undefined>(undefined);

export default MdxContext;
