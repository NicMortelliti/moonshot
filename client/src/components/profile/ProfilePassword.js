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
          id="currentPassword"
          name="currentPassword"
          value={currentPassword}
          placeholder="Enter your current password"
          onChange={onChange}
        />
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={newPassword}
          placeholder="Enter new password"
          onChange={onChange}
        />
        <input
          type="password"
          id="newPassword2"
          name="newPassword2"
          value={newPassword2}
          placeholder="Re-enter new password"
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfilePassword;
