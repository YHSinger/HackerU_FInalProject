const preventduplicatedrole = (payload) => {
  const Model = payload.Model;
  return async (req, res, next) => {
    const role = req.body.roles.find((role) => role === "admin");
    const adminexsists = await Model.findOne({ roles: role });
    if (adminexsists) {
      return res.status(400).send("Admin Already Exsists");
    }
    next();
  };
};

export default preventduplicatedrole;
