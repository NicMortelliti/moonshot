import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../features/auth/authSlice";

const ProfilePassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    password2: "",
  });

  const { password, password2 } = formData;
  const {
    user: { id: userId },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        password,
        password2,
      };

      dispatch(updateUserData({ userId, userData }));
    }
  };

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
          name="password"
          value={password}
          placeholder="Enter new password"
          onChange={onChange}
        />
        <input
          type="password"
          id="password2"
          name="password2"
          value={password2}
          placeholder="Re-enter new password"
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfilePassword;
