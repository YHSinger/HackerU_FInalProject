import { useContext } from "react";
import { LoginContext } from "../context/LoginProvider";

export const useLogin = () => useContext(LoginContext);

export default useLogin;
