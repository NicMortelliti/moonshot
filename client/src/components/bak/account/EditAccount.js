import React, { useState } from "react";

function EditAccount({ user, setUser }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: formData.firstName,
        last_name: formData.lastName,
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
        <div>
          <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
        </div>
      </form>
      {errors.map((err) => (
        <p key={err}>{err}</p>
      ))}
    </div>
  );
}

export default EditAccount;
