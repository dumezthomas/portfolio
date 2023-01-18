import React, { useState } from "react";

import DropdownLinkItem from "@/components/shared/header/DropdownLinkItem";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

const ProjectsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}
    >
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Projects
      </DropdownToggle>
      <DropdownMenu>
        <DropdownLinkItem href="/projects/" value="Projects" />
        <DropdownLinkItem href="/projects/new" value="Create Project" />
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProjectsMenu;
