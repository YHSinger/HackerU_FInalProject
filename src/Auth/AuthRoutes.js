import { useLocation, Navigate, Outlet } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const AuthRoutes = ({ allowedRoles }) => {
  const { user } = useLogin();
  const location = useLocation();
  return user?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/" />
  ) : (
    <Navigate to="/signin" />
  );
};

export default AuthRoutes;
