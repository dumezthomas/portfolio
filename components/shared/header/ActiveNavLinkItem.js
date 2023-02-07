import React from "react";

import ActiveLink from "components/shared/header/ActiveLink";
import { NavItem } from "reactstrap";

const ActiveNavLinkItem = ({ href, value }) => (
  <NavItem className="port-navbar-item">
    <ActiveLink href={href} activeClassName="active" value={value} />
  </NavItem>
);

export default ActiveNavLinkItem;
