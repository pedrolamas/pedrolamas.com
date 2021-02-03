declare module 'gatsby-plugin-mdx' {
  import * as React from 'react';

  type MDXRendererProps = {
    children: string;
  };

  const MDXRenderer: React.FunctionComponent<MDXRendererProps>;
}

declare module '@mdx-js/react' {
  import * as React from 'react';

  type MDXProviderComponents =
    | {
        [key in 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'thematicBreak' | 'blockquote' | 'ul' | 'ol' | 'li' | 'table' | 'tr' | 'td' | 'th' | 'pre' | 'code' | 'em' | 'strong' | 'delete' | 'inlineCode' | 'hr' | 'a' | 'img']?: React.ReactNode;
      }
    | { [key: string]: React.ReactNode };

  type MDXProviderProps = {
    components: MDXProviderComponents;
  };

  const MDXProvider: React.FunctionComponent<MDXProviderProps>;
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
