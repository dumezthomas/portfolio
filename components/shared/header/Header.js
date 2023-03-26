import React, { useEffect, useState } from "react";
import ReactResizeDetector from "react-resize-detector";

import isAuthorized from "utils/isAuthorized";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

import NavBarBrand from "components/shared/header/NavBarBrand";
import ActiveNavLinkItem from "components/shared/header/ActiveNavLinkItem";
import NavAnchorItem from "components/shared/header/NavAnchorItem";
import AdminMenu from "components/shared/header/AdminMenu";
import SocialMenu from "components/shared/header/SocialMenu";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";

const Header = ({ navBarBg, user, userLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <ReactResizeDetector handleWidth>
      {({ width }) => (
        <Navbar
          className={`port-navbar port-default absolute ${navBarBg} ${
            width < 992 - 2 * 30 && isOpen ? "is-open" : "is-close"
          }`}
          dark
          expand="lg"
        >
          <NavBarBrand href="/">Thomas Dumez</NavBarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <ActiveNavLinkItem href="/" value="Home" />
              <ActiveNavLinkItem href="/about" value="About" />
              {!userLoading && isAuthorized(user, "admin") ? (
                <>
                  <ActiveNavLinkItem href="/resume" value="Resume" />
                  <AdminMenu />
                </>
              ) : (
                <>
                  <ActiveNavLinkItem href="/projects" value="Projects" />
                  <ActiveNavLinkItem href="/resume" value="Resume" />
                </>
              )}

              {!userLoading && user && (
                <NavAnchorItem
                  href="/api/auth/logout"
                  value={<FontAwesomeIcon icon={faSignOut} />}
                />
              )}
            </Nav>
            <Nav className="ms-auto" navbar>
              <SocialMenu />
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </ReactResizeDetector>
  );
};

export default Header;
