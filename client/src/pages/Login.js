import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
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
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  //   useEffect(
  //     () => {
  //       console.log(isSuccess);
  //       // Display errors if there are any
  //       // if (isError || !user) {
  //       // }
  //
  //       // If successful, navigate to users trips
  //       // if (isSuccess) {
  //       toast.success("Welcome back!");
  //       navigate("/my-trips");
  //       // }
  //     },
  //     isError,
  //     isSuccess
  //   );

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
      }}>
      <H2 light>Log in</H2>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <Flex direction="column" justify="center" border>
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
        </Flex>
        <Flex>
          <Button type="submit" text={isLoading ? "Loading..." : "Submit"} />
        </Flex>
      </Form>
    </div>
  );
};

export default Login;
