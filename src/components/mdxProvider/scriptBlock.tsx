import React from 'react';
import Gist from 'react-gist';
import { Script } from 'gatsby';

type scriptBlockProps = React.ComponentPropsWithoutRef<typeof Script>;

const ScriptBlock: React.FunctionComponent<scriptBlockProps> = (props) => {
  const { src } = props;

  const isSsr = typeof window === 'undefined';

  if (src && !isSsr) {
    const gistHref = /^https:\/\/gist\.github\.com\/([^.]+)\.js(?:\?file=(.+))?/.exec(src);

    if (gistHref) {
      return <Gist id={gistHref[1]} file={gistHref[2]} />;
    }
  }

  return <Script {...props} />;
};

ScriptBlock.displayName = 'ScriptBlock';

export default ScriptBlock;
