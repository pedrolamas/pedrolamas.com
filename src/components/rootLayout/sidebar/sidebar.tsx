import React from 'react';

import SidebarAbout from './sidebarAbout';
import SidebarSitemap from './sidebarSitemap';
import SidebarSocial from './sidebarSocial';
import SidebarLogos from './sidebarLogos';
// import SidebarFacebook from './sidebarFacebook';

const Sidebar: React.FunctionComponent = () => (
  <aside className="sidebar">
    <div className="container sidebar-sticky">
      <SidebarAbout />

      <SidebarSitemap />

      <SidebarSocial />

      <SidebarLogos />

      {/* <SidebarFacebook /> */}
    </div>
  </aside>
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
