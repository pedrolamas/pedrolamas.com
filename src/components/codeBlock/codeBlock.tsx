import React from 'react';
import Prism from 'prismjs';
import Highlight, {defaultProps, PrismTheme, Prism as BundledPrism} from 'prism-react-renderer';
import "prismjs/components/prism-csharp";

import { default as theme } from './themes/github';

type PrismLib = typeof BundledPrism;

const CodeBlock: React.FunctionComponent<any> = ({children, className}) => {
  const language = className.replace(/language-/, '')

  const prismTheme = (theme as PrismTheme);
  const prism = (Prism as unknown as PrismLib);

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={prismTheme} Prism={prism}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <div className="highlight">
          <pre className={`${className} highlight`} style={style}>
            {tokens.slice(0, -1).map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export default CodeBlock;
