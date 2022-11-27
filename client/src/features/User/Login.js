import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";

// Store
import { useSelector, useDispatch } from "react-redux";
import { clearState, fetchUserLogin } from "./UserSlice";
// import toast from "react-hot-toast";

// Components
import Status from "./Status";

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

  // Set history
  const history = useHistory();
  useEffect(() => {
    if (user.isError) {
      // toast.error(errorMessage);
      dispatch(clearState());
      return;
    }

    if (user.isSuccess) {
      // dispatch(clearState());
      history.push("/");
    }
  }, [user.isSuccess, user.isError]);

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
        <span>
          Or <Link to="signup"> Signup</Link>
        </span>
      </div>
      <div>
        <Status />
      </div>
    </div>
  );
};

export default Login;
