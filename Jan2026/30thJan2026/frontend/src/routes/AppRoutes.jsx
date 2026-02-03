import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/AdminDashboard";
import Activities from "../pages/Activities";
import Tasks from "../pages/Tasks";
import Projects from "../pages/Projects";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes allowedRoles={["Admin"]}>
            <AdminDashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/projects"
        element={
          <PrivateRoutes allowedRoles={["Admin"]}>
            <Projects />
          </PrivateRoutes>
        }
      />
      <Route
        path="/tasks"
        element={
          <PrivateRoutes allowedRoles={["Admin"]}>
            <Tasks />
          </PrivateRoutes>
        }
      />
      <Route
        path="/activities"
        element={
          <PrivateRoutes allowedRoles={["Admin"]}>
            <Activities />
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
