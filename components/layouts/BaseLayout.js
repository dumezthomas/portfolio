import React from "react";

import { ToastContainer } from "react-toastify";
import Header from "components/shared/header/Header";

const BaseLayout = ({ className, navBarBg = "with-bg", user, userLoading, children }) => {
  return (
    <div className="layout-container">
      <Header navBarBg={navBarBg} user={user} userLoading={userLoading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default BaseLayout;
