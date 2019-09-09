import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

import PrismLib from './prismLib';
import Theme from './theme';

interface CodeBlockProps {
  children: string;
  className: string;
}

const CodeBlock: React.FunctionComponent<CodeBlockProps> = ({ children, className }) => {
  const language = className.replace(/language-/, '') as Language;

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={Theme} Prism={PrismLib}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="highlight">
          <pre className={`${className} highlight`} style={style}>
            {tokens.slice(0, -1).map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

CodeBlock.displayName = 'CodeBlock';

export default CodeBlock;
