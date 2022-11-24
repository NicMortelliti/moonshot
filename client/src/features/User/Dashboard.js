import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSelector, fetchUserBytoken, clearState } from "./UserSlice";
import { LineWave } from "react-loader-spinner";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { isFetching, isError } = useSelector(userSelector);

  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem("token") }));
  }, []);

  const { username, email } = useSelector(userSelector);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      history.push("/login");
    }
  }, [isError]);

  const onLogOut = () => {
    localStorage.removeItem("token");

    history.push("/login");
  };

  return (
    <div className="container mx-auto">
      {isFetching ? (
        <LineWave color="#00BFFF" height={100} width={100} />
      ) : (
        <Fragment>
          <div>
            Welcome back <h3>{username}</h3>
          </div>
          <button onClick={onLogOut}>Log Out</button>
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
