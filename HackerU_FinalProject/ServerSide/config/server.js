import dontenv from "dotenv";
dontenv.config();

const SERVER_PORT = process.env.SERVER_PORT;

const SERVER = {
  port: SERVER_PORT,
};

export default SERVER;
