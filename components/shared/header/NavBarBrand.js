import React from "react";
import Link from "next/link";

const NavBarBrand = ({ href, children }) => (
  <Link href={href} className="navbar-brand port-navbar-brand">
    {children}
  </Link>
);

export default NavBarBrand;
