import React, { useState } from "react";

function Login({ setUser, setShowLogin }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    fetch("/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  // Shared function to handle updating fields
  const handleFormFieldChange = (e) =>
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleFormFieldChange(e)}
          />
        </label>
        <label>
          Password
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => handleFormFieldChange(e)}
          />
        </label>
        <div>
          <button type="submit">{isLoading ? "Loading..." : "Log In"}</button>
          <p>
            Don't have an account?
            <button onClick={() => setShowLogin(false)}>Signup</button>
          </p>
        </div>
      </form>
      {errors.map((err) => (
        <p key={err}>{err}</p>
      ))}
    </div>
  );
}

export default Login;
