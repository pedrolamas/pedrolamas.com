import React from 'react';

type ContentProps = {
  children: React.ReactNode;
};

const Content: React.FunctionComponent<ContentProps> = ({ children }) => <div className="content container">{children}</div>;

Content.displayName = 'Content';

export default Content;
