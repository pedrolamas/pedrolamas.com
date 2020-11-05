import React from 'react';
import Gist from 'react-gist';

type scriptBlockProps = React.ComponentPropsWithoutRef<'script'>;

const ScriptBlock: React.FunctionComponent<scriptBlockProps> = (props) => {
  const { src } = props;

  const isSsr = typeof window === 'undefined';

  if (src && !isSsr) {
    const gistHref = /^https:\/\/gist\.github\.com\/([^.]+)\.js(?:\?file=(.+))?/.exec(src);

    if (gistHref) {
      return <Gist id={gistHref[1]} file={gistHref[2]} />;
    }
  }

  return <script {...props} />;
};

ScriptBlock.displayName = 'ScriptBlock';

export default ScriptBlock;
