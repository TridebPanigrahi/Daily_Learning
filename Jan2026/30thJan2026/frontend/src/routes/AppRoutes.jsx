import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes allowedRoles={["Admin"]}>
            <Dashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/user"
        element={
          <PrivateRoutes allowedRoles={["User"]}>
            <Users />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
