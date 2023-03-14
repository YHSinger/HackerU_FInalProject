import bcryptjs from "bcryptjs";

const salting = (salt) => {
  const salter = bcryptjs.genSaltSync(Number(salt));
  return salter;
};

const hashing = async (password, salter) => {
  const hashPassword = await bcryptjs.hash(password, salter);
  return hashPassword;
};
const password = {
  salting,
  hashing,
};

export default password;
