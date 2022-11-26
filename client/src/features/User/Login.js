import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserLogin } from "./UserSlice";
// import toast from "react-hot-toast";
// import { useHistory } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Redux Store and API Fetching
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUserLogin(formData));
  };

  // Form Updating
  const handleFormUpdate = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => handleFormUpdate(e)}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={(e) => handleFormUpdate(e)}
      />
      <div>
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </div>
      <div>
        <p>isFetching: {user.isFetching ? "true" : "false"}</p>
        <p>isSuccess: {user.isSuccess ? "true" : "false"}</p>
        <p>isError: {user.isError ? "true" : "false"}</p>
        {user.data ? (
          <p>
            {user.data.id} {user.data.first_name} {user.data.last_name}{" "}
            {user.data.email} {user.data.admin}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
