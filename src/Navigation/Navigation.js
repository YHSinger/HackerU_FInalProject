import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";
import LoginPage from "../Pages/signin";
import Register from "../Pages/Signup";
import Logout from "../Components/User/Logout";
import AuthRoutes from "../Auth/AuthRoutes";
import userRoles from "../Auth/roles.json";
import Favorites from "../Pages/Favorites";
import Profile from "../Pages/Profile";
import GuestRoutes from "../Auth/GuestRoutes";
import BizProvider from "../context/BusinessProvider";

const Dashboard = React.lazy(() => import("../Pages/Dashboard"));

const Navigation = () => {
  return (
    <Routes>
      {/*public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />

      {/* User Routes */}
      <Route element={<AuthRoutes allowedRoles={[userRoles.roles.User]} />}>
        <Route path="favorites" element={<Favorites />} />
        <Route path="profile" element={<Profile />} />
        <Route path="logout" element={<Logout />} />
      </Route>

      {/* Guest routes*/}
      <Route element={<GuestRoutes />}>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<LoginPage />} />
      </Route>

      {/* biz routes*/}
      <Route element={<AuthRoutes allowedRoles={[userRoles.roles.Business]} />}>
        <Route
          path="dashboard"
          element={
            <React.Suspense fallback={<div>Loading..</div>}>
              <BizProvider>
                <Dashboard />
              </BizProvider>
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default Navigation;
