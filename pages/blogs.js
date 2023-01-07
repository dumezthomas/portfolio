import React from "react";

import { useUser } from "@auth0/nextjs-auth0/client";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";

const Blogs = () => {
  const { user, isLoading: userLoading } = useUser();

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Blogs"></BasePage>
    </BaseLayout>
  );
};

export default Blogs;
