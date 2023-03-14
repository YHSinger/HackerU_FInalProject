import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";
import LoginPage from "../Pages/signin";
import Register from "../Pages/Signup";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="signup" element={<Register />} />
    </Routes>
  );
};

export default Navigation;
