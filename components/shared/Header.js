import React, { useState } from "react";
import Link from "next/link";

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

const NavBarBrand = ({ href, children }) => (
  <Link href={href} className="navbar-brand port-navbar-brand">
    {children}
  </Link>
);

const NavLinkItem = ({ href, value }) => (
  <NavItem className="port-navbar-item">
    <Link href={href} className="nav-link port-navbar-link">
      {value}
    </Link>
  </NavItem>
);

const NavAnchorItem = ({ href, value }) => (
  <NavItem className="port-navbar-item">
    <a href={href} className="nav-link port-navbar-link">
      {value}
    </a>
  </NavItem>
);

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
            <NavLinkItem href="/projects" value="Projects" />
            <NavLinkItem href="/blogs" value="Blogs" />
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
