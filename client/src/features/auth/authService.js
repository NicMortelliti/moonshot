import { handleResponse } from "../../helpers/helpers";

// Register user
const register = async (userData) => {
  const response = await fetch("/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return handleResponse(response);
};

// Login User
const login = async (userData) => {
  const response = await fetch("/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return handleResponse(response);
};

// Re-Login user
const reLogin = async () => {
  const response = await fetch("/me");
  return handleResponse(response);
};

// Logout User
const logout = async () => {
  const response = await fetch("/sessions", { method: "DELETE" });
  return handleResponse(response);
};

const authService = {
  register,
  reLogin,
  login,
  logout,
};

export default authService;
