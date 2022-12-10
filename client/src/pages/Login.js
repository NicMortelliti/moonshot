import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../features/auth/authSlice";

// Styled Components
import { Button } from "../components/styles/Button.styled";
import { Flex } from "../components/styles/Flex.styled";
import { Form, InputContainer } from "../components/styles/FormStyled.styled";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Destructure to make it easier to work with within the component
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Grab properties from auth state
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // Display errors if there are any
    if (isError || !user) {
      toast.error(message);
    }

    // If successful, navigate to home page
    if (isSuccess || user) {
      toast.success("Welcome back!");
      navigate("/");
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // Update formData when user enters
  // data in the fields
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit formData to API
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = { email, password };

    dispatch(login(userData));
  };

  return (
    <Flex>
      <Form onSubmit={onSubmit}>
        <h2>Log in</h2>
        <InputContainer>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Email address"
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onChange}
          />
        </InputContainer>
        <Button type="submit">Submit</Button>
      </Form>
    </Flex>
  );
};

export default Login;
