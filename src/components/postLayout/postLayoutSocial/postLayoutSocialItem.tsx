import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type PostLayoutSocialItemProps = {
  name: string;
  label: string;
  link: string;
  icon: IconProp;
};

const PostLayoutSocialItem: React.FunctionComponent<PostLayoutSocialItemProps> = ({ name, label, link, icon }) => (
  <a className="post-social-item" href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <FontAwesomeIcon icon={icon} />
    <span>{name}</span>
  </a>
);

export default PostLayoutSocialItem;
