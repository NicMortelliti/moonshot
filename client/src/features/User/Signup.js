import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { signupUser, userSelector, clearState } from "./UserSlice";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };

  // Initialize form data
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  // Try dispatching
  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      history.push("/");
    }

    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  return (
    <Fragment>
      <div>
        <h2>Sign up for an account</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          {/* //TODO Form placeholder */}
        </form>
        <div>
          <span>
            Or <Link to={login}>Login</Link>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
