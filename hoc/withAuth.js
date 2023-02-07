import { useUser } from "@auth0/nextjs-auth0/client";

import isAuthorized from "utils/isAuthorized";

import Redirect from "components/shared/Redirect";

const withAuth = (Component) => (role) => {
  return (props) => {
    const { user, error: userError, isLoading: userLoading } = useUser();

    if (userLoading) return <div className="alert alert-primary">Loading...</div>;
    if (userError) return <div className="alert alert-danger">{userError.message}</div>;

    if (isAuthorized(user, role))
      return <Component user={user} userLoading={userLoading} {...props} />;

    return <Redirect ssr to="/api/auth/login" />;
  };
};

export default withAuth;
