import React from "react";
import LoginProvider from "./LoginProvider";
import CardProvider from "./CardProvider";
import UserProvider from "./UserProvider";

const Provders = ({ children }) => (
  <CardProvider>
    <LoginProvider>
      <UserProvider>{children}</UserProvider>
    </LoginProvider>
  </CardProvider>
);

export default Provders;
