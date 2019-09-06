import React from 'react';
import { IconPrefix, IconLookup, findIconDefinition } from '@fortawesome/fontawesome-svg-core';

type FontAwesomeSymbolProps = IconLookup & {
  symbol: string;
  prefix?: IconPrefix;
};

const FontAwesomeSymbol: React.FunctionComponent<FontAwesomeSymbolProps> = props => {
  const iconDefinition = findIconDefinition(props);
  const [width, height] = iconDefinition.icon;

  const widthClass = `fa-w-${Math.ceil((width / height) * 16)}`;

  return (
    <svg className={`svg-inline--fa ${widthClass}`}>
      <use xlinkHref={`#${props.symbol}`}></use>
    </svg>
  );
};

FontAwesomeSymbol.defaultProps = {
  prefix: 'fas',
};

export default FontAwesomeSymbol;
