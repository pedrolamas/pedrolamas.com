import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import Theme from 'prism-react-renderer/themes/github';

import PrismLib from './prismLib';
import { Utils } from '../../../utils';

type CodeBlockProps = {
  children: string;
  className: string;
  lineNumbers?: string;
  highlight?: string;
};

const CodeBlock: React.FunctionComponent<CodeBlockProps> = (props) => {
  const { children, className, lineNumbers, highlight } = props;

  const language = className.replace(/language-/, '') as Language;

  const startIndex = parseInt(lineNumbers || '') || 1;
  const indexInRange = Utils.rangeValidatorFactory(highlight || '');

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={Theme} Prism={PrismLib}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="highlight">
          <pre className={`${className} highlight`} style={style}>
            {tokens.slice(0, -1).map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {lineNumbers && <div className="token-line-number">{i + startIndex}</div>}
                <div className={`token-line-content${indexInRange(i + startIndex) ? ' highlight' : ''}`}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                  <br />
                </div>
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
