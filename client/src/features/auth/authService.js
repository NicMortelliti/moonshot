// Register user
const register = async (userData) => {
  const response = await fetch("/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return response.json();
};

// Logout User
const logout = async () => {
  const response = await fetch("/sessions", { method: "DELETE" });

  return response.json();
};

const authService = {
  register,
  logout,
};

export default authService;
