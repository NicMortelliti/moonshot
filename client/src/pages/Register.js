import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../features/auth/authSlice";

// Styled Components
import { Button } from "../components/styles/Button.styled";
import { Flex } from "../components/styles/Flex.styled";
import { Form, InputContainer } from "../components/styles/FormStyled.styled";
import { H2 } from "../components/styles/Text.styled";

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
  const { user, isLoading } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit formData to API
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
      return;
    } else {
      dispatch(register({ first_name, last_name, email, password })).then(
        (r) => {
          if (r.ok) {
            navigate("/my-trips");
          }
        }
      );
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/my-trips");
    }
  }, [user, navigate]);

  return (
    <Flex direction="column">
      <H2 center light fancy>
        Sign up
      </H2>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <Flex direction="column">
          <Flex>
            <InputContainer>
              <input
                type="text"
                name="first_name"
                value={first_name}
                placeholder="First name"
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <input
                type="text"
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
                name="password"
                value={password}
                placeholder="Password"
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <input
                type="password"
                name="password2"
                value={password2}
                placeholder="Confirm"
                onChange={onChange}
              />
            </InputContainer>
          </Flex>
          <Button primary type="submit">
            {isLoading ? "Loading..." : "Submit"}{" "}
          </Button>
        </Flex>
      </Form>
    </Flex>
  );
};

export default Register;
