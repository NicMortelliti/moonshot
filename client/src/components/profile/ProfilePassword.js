import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../features/auth/authSlice";

// Styled Components
import { Button } from "../styles/Button.styled";
import { Form, InputContainer } from "../styles/FormStyled.styled";
import { Flex } from "../styles/Flex.styled";
import { ActionPanel } from "../styles/Profile.styled";

const ProfilePassword = ({ setAction }) => {
  const [formData, setFormData] = useState({
    password: "",
    password2: "",
  });

  // Destructure to make it easier to work with within the component
  const { password, password2 } = formData;
  const {
    user: { id: userId },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const closeExpansionPanel = (e) => {
    e.preventDefault();
    setAction(null);
  };

  // When 'Submit' button is clicked we first
  // check if the 2 new password fields match.
  // If they don't match, stop the submission
  // process. If they do match, continue onto
  // setting the userData variable as an object
  // containing the 2 passwords.
  // Then, dispatch the user data update with
  // the passwords as the props.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      toast.error("Passwords do not match");
      return null;
    } else {
      dispatch(updateUserData({ userId, userData: formData })).then(() =>
        closeExpansionPanel(e)
      );
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const ShowSectionControl = () => (
    <Button primary name={null} onClick={(e) => setAction(e)}>
      Nevermind
    </Button>
  );

  return (
    <ActionPanel>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Flex gap="10px" direction="column">
          <Flex gap="10px">
            <InputContainer>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer>
              <input
                type="password"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Re-enter new password"
                onChange={handleChange}
              />
            </InputContainer>
          </Flex>
          <Flex gap="10px" direction="column">
            <Button alert type="submit">
              Submit
            </Button>
            <ShowSectionControl />
          </Flex>
        </Flex>
      </Form>
    </ActionPanel>
  );
};

export default ProfilePassword;
