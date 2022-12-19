import React, { useState } from "react";
import Link from "next/link";

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";

const NavLinkItem = ({ href, title }) => {
  return (
    <NavItem className="port-navbar-item">
      <Link href={href} className="nav-link port-navbar-link">
        {title}
      </Link>
    </NavItem>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
        <NavbarBrand href="/" className="port-navbar-brand">
          Dumez Thomas
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLinkItem href="/" title="Home" />
            <NavLinkItem href="/about" title="About" />
            <NavLinkItem href="/portfolios" title="Portfolios" />
            <NavLinkItem href="/resume" title="Resume" />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
