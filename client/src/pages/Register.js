import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../features/auth/authSlice";
import planet from "../components/images/planet.jpg";

// Styled Components
import { Button } from "../components/styles/Button.styled";
import { Flex } from "../components/styles/Flex.styled";
import { Form, InputContainer } from "../components/styles/FormStyled.styled";
import { FrostedContainer } from "../components/styles/Frost.styled";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  // Destructure to make it easier to work with within the component
  const { first_name, last_name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Grab properties from auth state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // Display errors if there are any
    if (isError) {
      toast.error(message);
    }

    // If successful, navigate to home page
    if (isSuccess || user) {
      navigate("/");
    }

    // Set everything back to default values
    // dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = { first_name, last_name, email, password };

      dispatch(register(userData));
    }
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
          <h2>Sign up</h2>
        </Flex>
        <Flex>
          <Form onsSubmit={onSubmit}>
            <Flex>
              <InputContainer>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={first_name}
                  placeholder="First name"
                  onChange={onChange}
                />
              </InputContainer>
              <InputContainer>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={last_name}
                  placeholder="Last name"
                  onChange={onChange}
                />
              </InputContainer>
            </Flex>
            <Flex>
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
            </Flex>
            <Flex>
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
              <InputContainer>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  value={password2}
                  placeholder="Confirm"
                  onChange={onChange}
                />
              </InputContainer>
            </Flex>
            <Flex>
              <Button type="submit">
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </Flex>
          </Form>
        </Flex>
      </FrostedContainer>
    </div>
  );
};

export default Register;
