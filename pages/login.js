import React from "react";

import isAuthorized from "utils/isAuthorized";
import { useUser } from "@auth0/nextjs-auth0/client";

import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import Redirect from "components/shared/Redirect";

const Login = () => {
  const { user, isLoading: userLoading } = useUser();

  if (!userLoading && user) {
    return (
      <BaseLayout user={user} userLoading={userLoading}>
        <BasePage header="Login">
          <p>
            {`You are logged in as ${user.name}`}
            {isAuthorized(user, "admin") && " (ADMIN)"}
          </p>
        </BasePage>
      </BaseLayout>
    );
  }

  if (!userLoading && !user) return <Redirect ssr to="/api/auth/login" />;
};

export default Login;
