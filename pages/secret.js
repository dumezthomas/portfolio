import React from "react";

import withAuth from "@/hoc/withAuth";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";

const Secret = ({ user, userLoading }) => {
  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage>
        <h1>Secret Page - {user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(Secret);
