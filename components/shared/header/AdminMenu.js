import React, { useState } from "react";

import DropdownLinkItem from "components/shared/header/DropdownLinkItem";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}
    >
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Admin
      </DropdownToggle>
      <DropdownMenu>
        <DropdownLinkItem href="/projects/" value="Projects" />
        <DropdownLinkItem href="/skills/" value="Skills" />
      </DropdownMenu>
    </Dropdown>
  );
};

export default AdminMenu;
