import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/auth/authSlice";

// Styled components
import { Button } from "../styles/Button.styled";
import { ActionPanel } from "../styles/Profile.styled";
import { H3, H4 } from "../styles/Text.styled";

const ProfileDelete = ({ setAction }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteUser());
  };

  const ShowSectionControl = () => (
    <Button name={null} onClick={(e) => setAction(e)}>
      Nevermind
    </Button>
  );

  const ConfirmActionSection = () => (
    <ActionPanel>
      <H3 light>Are you sure you want to delete your account?</H3>
      <H4 light>You're account will be gone forever...</H4>
      <div
        style={{
          display: "flex",
          gap: "1em",
          padding: "1em 0",
        }}>
        <Button alert name="confirmDelete" onClick={(e) => handleSubmit(e)}>
          Yes, delete my account.
        </Button>
        <ShowSectionControl />
      </div>
    </ActionPanel>
  );

  return (
    <div>
      <ConfirmActionSection />
    </div>
  );
};

export default ProfileDelete;
