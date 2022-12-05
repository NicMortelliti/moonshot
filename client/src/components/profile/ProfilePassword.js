import React, { useState } from "react";

const ProfilePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    newPassword2: "",
  });

  const { currentPassword, newPassword, newPassword2 } = formData;

  const onSubmit = () => {};

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="password"
          id="password"
          name="currentPassword"
          value={currentPassword}
          placeholder="Enter your current password"
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfilePassword;
