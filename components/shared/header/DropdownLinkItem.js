import React from "react";
import Link from "next/link";

import { DropdownItem } from "reactstrap";

const DropdownLinkItem = ({ href, value }) => (
  <DropdownItem>
    <Link href={href} className="nav-link port-navbar-link port-dropdown-item">
      {value}
    </Link>
  </DropdownItem>
);

export default DropdownLinkItem;
