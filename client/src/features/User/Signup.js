import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

// Store
import { useSelector, useDispatch } from "react-redux";
import { fetchUserSignup } from "./UserSlice";
// import toast from "react-hot-toast";
// import { useHistory } from "react-router-dom";

// Components
import Status from "./Status";

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // Redux Store and API Fetching
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUserSignup(formData));
  };

  // Form Updating
  const handleFormUpdate = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={(e) => handleFormUpdate(e)}
        />
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={(e) => handleFormUpdate(e)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleFormUpdate(e)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleFormUpdate(e)}
        />
        <input
          type="password"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={(e) => handleFormUpdate(e)}
        />
      </div>

      <div>
        <button onClick={(e) => handleSubmit(e)}>Signup</button>
      </div>
      <div>
        <Status />
      </div>
    </div>
  );
};

export default Signup;
