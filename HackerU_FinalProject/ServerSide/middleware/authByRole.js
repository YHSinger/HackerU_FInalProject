const authByRole = (payload) => {
  return async (req, res, next) => {
    const role = req.user.roles.find((role) => payload.includes(role));
    if (!role) {
      return res
        .status(400)
        .send("You are not authorized to preform this action");
    }
    next();
  };
};
export default authByRole;
