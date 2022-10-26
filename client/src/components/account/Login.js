import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // Shared function to handle updating fields
  const handleFormFieldChange = (e) =>
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  return <div>Login</div>;
}

export default Login;
