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

const NavLinkLogin = () => <span className="nav-link port-navbar-link clickable">Login</span>;

const NavLinkLogout = () => <span className="nav-link port-navbar-link clickable">Logout</span>;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
        <NavBarBrand href="/">Dumez Thomas</NavBarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLinkItem href="/" value="Home" />
            <NavLinkItem href="/about" value="About" />
            <NavLinkItem href="/portfolio" value="Portfolio" />
            <NavLinkItem href="/resume" value="Resume" />
          </Nav>
          <Nav navbar>
            <NavItem className="port-navbar-item">
              <NavLinkLogin />
            </NavItem>
            <NavItem className="port-navbar-item">
              <NavLinkLogout />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
