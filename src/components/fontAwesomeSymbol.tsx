import React from 'react';

import { FontAwesome } from '../utils';

type FontAwesomeSymbolProps = {
  symbolName: FontAwesome.SymbolNames;
};

const FontAwesomeSymbol: React.FunctionComponent<FontAwesomeSymbolProps> = ({ symbolName }) => {
  const [width, height] = FontAwesome.Symbols[symbolName].icon;

  const widthClass = `fa-w-${Math.ceil((width / height) * 16)}`;

  return (
    <svg className={`svg-inline--fa ${widthClass}`}>
      <use xlinkHref={`#${symbolName}`}></use>
    </svg>
  );
};

FontAwesomeSymbol.displayName = 'FontAwesomeSymbol';

export default FontAwesomeSymbol;
