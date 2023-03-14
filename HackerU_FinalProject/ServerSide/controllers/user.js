import User from "../Model/User.js";
import Joi from "joi";
import password from "../utils/password.js";
import bcryptjs from "bcryptjs";

function validateRegistration(body) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(250).required(),
    email: Joi.string()
      .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      .min(2)
      .max(150)
      .required(),
    password: Joi.string().min(6).max(250).required(),
    roles: Joi.array(),
  });

  return schema.validate(body);
}

function validateLogin(body) {
  const schema = Joi.object({
    email: Joi.string()
      .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      .min(2)
      .max(150)
      .required(),
    password: Joi.string().min(6).max(250).required(),
  });

  return schema.validate(body);
}
const register = async (req, res, next) => {
  const { error } = validateRegistration(req.body);
  if (error) {
    return res.status(400).send(error?.details[0].message);
  }

  const emailExistance = await User.findOne({ email: req.body.email });
  if (emailExistance) {
    return res.status(400).send("User is already Registered");
  }
  const salt = password.salting(process.env.SALT);
  const hashPassword = await password.hashing(req.body.password, salt);
  req.body.password = hashPassword;
  try {
    const user = await User.create({
      ...req.body,
    });
    await user.save();
    res.status(201).send("User Created Successfully");
  } catch (error) {
    res.status(400).send(error);
  }
};
const login = async (req, res, next) => {
  const { error } = validateLogin(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).send("Invalid Email or Password");
  }
  const validatePassword = bcryptjs.compareSync(
    req.body.password,
    user.password
  );
  if (!validatePassword) {
    return res.status(401).send("Invalid Email or Password");
  }
  try {
    const token = user.generateAuthToken();
    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send(error);
  }
};

const userProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: "User Cannot be Found", error: error });
  }
};

const user = {
  register,
  login,
  userProfile,
};

export default user;
