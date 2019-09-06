import React from 'react';
import FontAwesomeSymbol from '../fontAwesomeSymbol';

import { MdxArticleSymbolDefinitions, MdxArticleSymbolNamesType } from './mdxArticleSymbolDefinitions';

type MdxArticleSymbolProps = {
  symbolName: MdxArticleSymbolNamesType;
};

const MdxArticleSymbol: React.FunctionComponent<MdxArticleSymbolProps> = ({ symbolName }) => <FontAwesomeSymbol iconName={MdxArticleSymbolDefinitions[symbolName]} symbolName={symbolName} />;

export default MdxArticleSymbol;
