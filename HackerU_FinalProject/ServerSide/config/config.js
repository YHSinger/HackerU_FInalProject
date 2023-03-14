import MONGO from "./database.js";
import SERVER from "./server.js";
import dotenv from "dotenv";
dotenv.config();

const config = {
  mongo: MONGO,
  server: SERVER,
};

export default config;
