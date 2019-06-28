/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'gatsby-mdx' {
  import * as React from 'react';

  type MDXRendererProps = {
    children: string;
  };

  const MDXRenderer: React.FunctionComponent<MDXRendererProps>;
}

declare module '@mdx-js/react' {
  import * as React from 'react';

  type MDXProviderComponents = {
    [key in 'p'|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'thematicBreak'|'blockquote'|'ul'|'ol'|'li'|'table'|'tr'|'td/th'|'pre'|'code'|'em'|'strong'|'delete'|'inlineCode'|'hr'|'a'|'img']?: React.ReactNode;
  };

  type MDXProviderProps = {
    components: MDXProviderComponents
  };

  const MDXProvider: React.FunctionComponent<MDXProviderProps>;
}

declare module 'disqus-react' {
  import * as React from "react";

  interface DisqusProps {
    shortname: string;
    config: {
      url: string;
      identifier: string;
      title: string;
    };
  }

  interface CommentCountProps extends DisqusProps {
    children?: React.ReactNode;
  }

  interface CommentEmbedProps {
    commentId: string;
    showParentComment?: boolean;
    showMedia?: boolean;
    width?: number;
    height?: number;
  }

  interface IDisqus {
    CommentCount: React.Component<CommentCountProps, {}>;
    CommentEmbed: React.Component<CommentEmbedProps, {}>;
    DiscussionEmbed: React.Component<DisqusProps, {}>;
  }

  class CommentCount extends React.Component<CommentCountProps, {}> {}
  class CommentEmbed extends React.Component<CommentEmbedProps, {}> {}
  class DiscussionEmbed extends React.Component<DisqusProps, {}> {}
  const Disqus: {
    CommentCount: React.ComponentType<CommentCountProps>;
    CommentEmbed: React.ComponentType<CommentEmbedProps>;
    DiscussionEmbed: React.ComponentType<DisqusProps>;
  };

  export { CommentCount, CommentEmbed, DiscussionEmbed };
  export default Disqus;
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
