// src/components/ProtectedRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, restrictAuthenticated }) => {
  const user = useSelector((state) => state.auth?.user || null);
 
  if (restrictAuthenticated && user) {
    return <Navigate to="/" replace />;
  } 


  return children;
};

export default ProtectedRoute;