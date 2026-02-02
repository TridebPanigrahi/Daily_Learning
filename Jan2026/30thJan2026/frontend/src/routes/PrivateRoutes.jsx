import React from "react";
import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/getUserRole";

const PrivateRoutes = ({ children, allowedRoles }) => {
  const roles = getUserRole();
  if (!roles) {
    return <Navigate to="/" />;
  }
  if (!allowedRoles.includes(roles)) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default PrivateRoutes;
