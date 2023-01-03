import React from "react";

import Header from "@/components/shared/Header";

const BaseLayout = ({ className, user, userLoading, children }) => {
  return (
    <div className="layout-container">
      <Header user={user} userLoading={userLoading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
