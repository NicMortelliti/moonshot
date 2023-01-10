import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

// Styled components
import { Button } from "../styles/Button.styled";
import { Flex } from "../styles/Flex.styled";
import { ActionPanel } from "../styles/Profile.styled";
import { H3, H4 } from "../styles/Text.styled";

const ProfileDelete = ({ setAction }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteUser()).then(() => navigate(""));
  };

  const ShowSectionControl = () => (
    <Button primary name={null} onClick={(e) => setAction(e)}>
      Nevermind
    </Button>
  );

  const ConfirmActionSection = () => (
    <ActionPanel>
      <H3 light>Are you sure you want to delete your account?</H3>
      <H4 light>You're account will be gone forever...</H4>
      <Flex gap="10px" direction="column">
        <Button alert name="confirmDelete" onClick={(e) => handleSubmit(e)}>
          Yes, delete my account.
        </Button>
        <ShowSectionControl />
      </Flex>
    </ActionPanel>
  );

  return (
    <div>
      <ConfirmActionSection />
    </div>
  );
};

export default ProfileDelete;
