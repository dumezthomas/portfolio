import React from "react";

import { NavItem } from "reactstrap";

const NavAnchorItem = ({ href, value }) => (
  <NavItem className="port-navbar-item">
    <a href={href} className="nav-link port-navbar-link">
      {value}
    </a>
  </NavItem>
);

export default NavAnchorItem;
