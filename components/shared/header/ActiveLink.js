import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ href, value, activeClassName }) => {
  const router = useRouter();
  let className = "nav-link port-navbar-link";

  if (router.asPath === href && activeClassName) {
    className = `${className} ${activeClassName}`;
  }

  return (
    <Link href={href} className={className}>
      {value}
    </Link>
  );
};

export default ActiveLink;
