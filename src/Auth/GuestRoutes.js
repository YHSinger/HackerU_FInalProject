import React, { useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const GuestRoutes = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default GuestRoutes;
