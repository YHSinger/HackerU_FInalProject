import axios from "axios";
import { toast } from "react-toastify";
import { getLocalStorage } from "../utils/localStorage";

axios.interceptors.request.use(
  (config) => {
    config.headers["x-auth-token"] = `${getLocalStorage("token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
export default httpService;
