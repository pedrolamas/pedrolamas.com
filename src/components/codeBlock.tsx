import React from 'react';
import Prism from 'prismjs';
import Highlight, {defaultProps, PrismTheme} from 'prism-react-renderer';
import "prismjs/components/prism-csharp";

import { default as theme } from '../../github';

const CodeBlock: React.FunctionComponent<any> = ({children, className}) => {
  const language = className.replace(/language-/, '')

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme as PrismTheme} Prism={Prism}>
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
