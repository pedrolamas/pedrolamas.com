import React from 'react';

import SidebarAbout from './sidebarAbout';
import SidebarSitemap from './sidebarSitemap';
import SidebarSocial from './sidebarSocial';
import SidebarLogos from './sidebarLogos';

const Sidebar: React.FunctionComponent = () => (
  <aside className="sidebar">
    <div className="container sidebar-sticky">
      <SidebarAbout />

      <SidebarSitemap />

      <SidebarSocial />

      <SidebarLogos />
    </div>
  </aside>
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
