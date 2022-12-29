import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../features/auth/authSlice";

// Styled Components
import { Button } from "../styles/Button.styled";
import { InputContainer } from "../styles/FormStyled.styled";
import { Flex } from "../styles/Flex.styled";
import { ActionPanel } from "../styles/Profile.styled";

const ProfilePassword = ({handleClick}) => {
  const [formData, setFormData] = useState({
    password: "",
    password2: "",
  });

  // Destructure formData
  const { password, password2 } = formData;
  const {
    user: { id: userId },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // When 'Submit' button is clicked we first
  // check if the 2 new password fields match.
  // If they don't match, stop the submission
  // process. If they do match, continue onto
  // setting the userData variable as an object
  // containing the 2 passwords.
  // Then, dispatch the user data update with
  // the passwords as the props.
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
      return null;
    } else {
      dispatch(updateUserData({ userId, userData: { password, password2 } }));
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const ShowSectionControl = () => (
    <Button name={null} onClick={(e) => handleClick(e)}>
      Nevermind
    </Button>
  );

  const Form = () => (
    <ActionPanel>
      <form onSubmit={onSubmit}>
        <Flex>
          <InputContainer>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter new password"
              onChange={onChange}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="password"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Re-enter new password"
              onChange={onChange}
            />
          </InputContainer>
        </Flex>
        <Button type="submit">Submit</Button>
        <ShowSectionControl />
      </form>
    </ActionPanel>
  );

  return (
    <>
      <Form />
    </>
  );
};

export default ProfilePassword;
