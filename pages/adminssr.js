import React from "react";

import withAuth from "@/utils/withAuth";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";

const AdminSSR = ({ user }) => {
  return (
    <BaseLayout user={user} userLoading={false}>
      <BasePage>
        <h1>Admin Page - SSR {user && `- ${user.name}`}</h1>
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps = withAuth()("admin");

export default AdminSSR;
