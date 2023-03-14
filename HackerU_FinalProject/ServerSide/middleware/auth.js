import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.query.token || req.header("x-auth-token");

  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied no token provided." });

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = payload;
    next();
  } catch (e) {
    console.error(e);
    return res.status(400).json({ message: "Invalid Token." });
  }
};
export default auth;
