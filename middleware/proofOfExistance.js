import User from "../Model/User.js";

const proofOfExistance = () => {
  return async (req, res, next) => {
    const user = await User.findOne({ _id: req.user._id });
    if (!user) return res.status(400).send("User Does not Exsist");
    next();
  };
};

export default proofOfExistance;
