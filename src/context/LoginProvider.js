import React, { useState, useEffect, createContext, Fragment } from "react";
import userService from "../services/user";
import { getLocalStorage, removeLocalStorage } from "../utils/localStorage";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(() => getLocalStorage("user", null));

  const [isLoggedIn, setisLoggedIn] = useState(() => (user ? true : false));

  useEffect(() => {
    setUser(userService.getCurrentUser());
  }, [isLoggedIn]);

  const logIn = async (data) => {
    const response = await userService.signin(data);
    setisLoggedIn(true);
    return response;
  };
  const logout = () => {
    userService.logOut();
    removeLocalStorage("user");
    setisLoggedIn(false);
  };
  return (
    <LoginContext.Provider value={{ user, isLoggedIn, logIn, logout }}>
      <Fragment>{children}</Fragment>
    </LoginContext.Provider>
  );
};

export default LoginProvider;
