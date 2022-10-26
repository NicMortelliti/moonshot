import React, { useState } from "react";

function Signup({ setUser, setShowLogin }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.passwordConfirmation,
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

  const handleFormFieldChange = (e) =>
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleFormFieldChange(e)}
          />
        </label>
        <label>
          Last Name
          <input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleFormFieldChange(e)}
          />
        </label>
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
        <label>
          Repeat Password
          <input
            id="passwordConfirmation"
            type="password"
            value={formData.passwordConfirmation}
            onChange={(e) => handleFormFieldChange(e)}
          />
        </label>
        <div>
          <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
          <button onClick={() => setShowLogin(true)}>I have an account</button>
        </div>
      </form>
      {errors.map((err) => (
        <p key={err}>{err}</p>
      ))}
    </div>
  );
}

export default Signup;
