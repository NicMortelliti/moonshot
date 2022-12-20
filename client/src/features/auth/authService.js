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

// Update user data on server
const updateUserData = async ({ userId, userData }) => {
  const response = await fetch(`/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: userData.password,
      password_confirmation: userData.password2,
    }),
  });
  return handleResponse(response);
};

// Delete user account
const deleteUser = async () => {
  const response = await fetch(`/users`, {
    method: "DELETE",
  });
  return handleResponse(response);
};

const authService = {
  updateUserData,
  register,
  reLogin,
  login,
  logout,
  deleteUser,
};

export default authService;
