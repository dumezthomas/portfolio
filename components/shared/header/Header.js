import React, { useState } from "react";

import isAuthorized from "@/utils/isAuthorized";

import NavBarBrand from "@/components/shared/header/NavBarBrand";
import NavLinkItem from "@/components/shared/header/NavLinkItem";
import NavAnchorItem from "@/components/shared/header/NavAnchorItem";
import ProjectsMenu from "@/components/shared/header/ProjectsMenu";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";

const Header = ({ navBarBg, user, userLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className={`port-navbar port-default absolute ${navBarBg}`} dark expand="md">
        <NavBarBrand href="/">Dumez Thomas</NavBarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLinkItem href="/" value="Home" />
            <NavLinkItem href="/about" value="About" />
            {!userLoading &&
              (isAuthorized(user, "admin") ? (
                <ProjectsMenu />
              ) : (
                <NavLinkItem href="/projects" value="Projects" />
              ))}
            <NavLinkItem href="/resume" value="Resume" />
          </Nav>
          <Nav navbar>
            {!userLoading &&
              (user ? (
                <NavAnchorItem href="/api/auth/logout" value="Logout" />
              ) : (
                <NavAnchorItem href="/api/auth/login" value="Login" />
              ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
