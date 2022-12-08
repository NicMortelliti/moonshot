import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register } from "../features/auth/authSlice";

// Styled Components
import { Button } from "../components/styles/Button.styled";
import { Flex } from "../components/styles/Flex.styled";
import { Input, InputContainer } from "../components/styles/FormField.styled";

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
    <>
      <section className="heading">
        <toast />
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <Flex>
            <InputContainer>
              <Input
                type="text"
                id="first_name"
                name="first_name"
                value={first_name}
                placeholder="Enter your first name"
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <Input
                type="text"
                id="last_name"
                name="last_name"
                value={last_name}
                placeholder="Enter your last name"
                onChange={onChange}
              />
            </InputContainer>
          </Flex>
          <Flex>
            <InputContainer>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </InputContainer>
          </Flex>
          <Flex>
            <InputContainer>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <Input
                type="password"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm password"
                onChange={onChange}
              />
            </InputContainer>
          </Flex>
          <Flex>
            <div>
              <Button type="submit">
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </div>
          </Flex>
        </form>
      </section>
    </>
  );
};

export default Register;
