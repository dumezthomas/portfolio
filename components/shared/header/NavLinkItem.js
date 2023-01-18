import React from "react";
import Link from "next/link";

import { NavItem } from "reactstrap";

const NavLinkItem = ({ href, value }) => (
  <NavItem className="port-navbar-item">
    <Link href={href} className="nav-link port-navbar-link">
      {value}
    </Link>
  </NavItem>
);

export default NavLinkItem;
