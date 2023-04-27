import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Logout = () => {
  const { logout } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      logout();
      navigate("/");
    };
    handleLogout();
  }, [logout, navigate]);
};

export default Logout;
