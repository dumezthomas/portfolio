import React from "react";

import { useUser } from "@auth0/nextjs-auth0/client";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";

const About = () => {
  const { user, isLoading: userLoading } = useUser();

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage>
        <h1>About</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
