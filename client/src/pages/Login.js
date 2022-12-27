import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";

// Styled Components
import { Button } from "../components/styles/Button.styled";
import { Flex } from "../components/styles/Flex.styled";
import { Form, InputContainer } from "../components/styles/FormStyled.styled";
import { H2 } from "../components/styles/Text.styled";

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
  const { isLoading } = useSelector((state) => state.auth);

  // Update formData when user enters
  // data in the fields
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit formData to API
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })).then(() => navigate("/my-trips"));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      <H2 light>Log in</H2>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <Flex direction="column" justify="center" border>
          <InputContainer>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email address"
              onChange={onChange}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
            />
          </InputContainer>
        </Flex>
        <Flex>
          <div>
            <Button type="submit" text={isLoading ? "Loading..." : "Submit"} />
          </div>
        </Flex>
      </Form>
    </div>
  );
};

export default Login;
