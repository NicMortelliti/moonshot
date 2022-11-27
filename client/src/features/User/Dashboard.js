import React, { Fragment, useEffect } from "react";

// Store
import { useSelector, useDispatch } from "react-redux";
import { fetchUserSignup } from "./UserSlice";

import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const onLogOut = () => {
    dispatch(fetchUserSignup());
    history.push("/login");
  };

  return (
    <div>
      <div>
        Welcome back <h3>{user.first_name}!</h3>
      </div>
      <button onClick={onLogOut}>Log Out</button>
    </div>
  );
};

export default Dashboard;
