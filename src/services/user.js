import httpService from "./http";
import config from "../config/config";
import jwtDecode from "jwt-decode";
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "../utils/localStorage";

const URL = config.server.url;

export const signup = (credentials) =>
  httpService.post(`http://localhost:3900/api/users/register`, credentials);

export const signin = async (credentials) => {
  const response = await httpService.post(
    `http://localhost:3900/api/users/login`,
    credentials
  );
  setLocalStorage("token", response.data.token);
  return response;
};

const logOut = () => removeLocalStorage("token");

const getCurrentUser = () => {
  try {
    const jwt = getLocalStorage("token");
    const data = jwtDecode(jwt);
    setLocalStorage("user", data);

    if (Date.now() >= data.exp * 1000) {
      logOut();
      return null;
    }
    return data;
  } catch {
    return null;
  }
};

const user = { signup, signin, getCurrentUser, logOut };

export default user;
