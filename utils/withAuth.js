import { getSession } from "@auth0/nextjs-auth0";

import isAuthorized from "utils/isAuthorized";

const withAuth =
  (getData) =>
  (role) =>
  async ({ req, res }) => {
    const session = await getSession(req, res);
    if (!session || !session.user || !isAuthorized(session.user, role)) {
      res.writeHead(302, { Location: "/api/auth/login" });
      res.end();
      return { props: {} };
    }

    const data = getData ? getData() : {};

    return { props: { user: session.user, ...data } };
  };

export default withAuth;
