const isAuthorized = (user, role) => {
  if (!user) return false;

  if (role) return user[`${process.env.AUTH0_NAMESPACE}/roles`].includes(role);

  return true;
};

export default isAuthorized;
