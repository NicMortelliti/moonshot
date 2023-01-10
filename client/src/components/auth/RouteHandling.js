import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// Private-facing routes (user logged in)
export const ProtectedRoute = ({ redirectPath = "/" }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

// Public-facing routes (user NOT logged in)
export const PublicRoute = ({ redirectPath = "/my-trips" }) => {
  const { user } = useSelector((state) => state.auth);

  if (user) {
    return <Navigate to={redirectPath} />;
  }
  return <Outlet />;
};
