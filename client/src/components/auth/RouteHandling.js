import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

// Private-facing routes (user logged in)
export const ProtectedRoute = ({ user, redirectPath = "/" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

// Public-facing routes (user NOT logged in)
// TODO Remove debugging string inside toast (below)
export const PublicRoute = ({ user, redirectPath = "/my-profile" }) => {
  if (user) {
    toast.error("That page does not exist (Check RouteHandling.js)");
    return <Navigate to={redirectPath} />;
  }
  return <Outlet />;
};
