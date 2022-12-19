import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../features/auth/authSlice";
import planet from "../components/images/planet.jpg";

// Styled Components
import { Button } from "../components/styles/Button.styled";
import { Flex } from "../components/styles/Flex.styled";
import { Form, InputContainer } from "../components/styles/FormStyled.styled";
import { FrostedContainer } from "../components/styles/Frost.styled";

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
    <div
      style={{
        display: "flex",
        backgroundImage: `url(${planet})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        top: "-70px",
        bottom: 0,
        left: 0,
        right: 0,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <FrostedContainer
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "500px",
        }}>
        <Flex>
          <h2>Log in</h2>
        </Flex>

        <Flex style={{ alignSelf: "stretch" }} border>
          <Form onSubmit={onSubmit}>
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
              <Button
                type="submit"
                text={isLoading ? "Loading..." : "Submit"}
                handleClick={onSubmit}
              />
            </Flex>
          </Form>
        </Flex>
      </FrostedContainer>
    </div>
  );
};

export default Login;
