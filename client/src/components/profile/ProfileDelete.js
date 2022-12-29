import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/auth/authSlice";

// Styled components
import { Button } from "../styles/Button.styled";

const ProfileDelete = () => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteUser());
  };

  const ConfirmActionSection = () => (
    <>
      <h3>Are you sure you want to delete your account?</h3>
      <h4>You're account will be gone forever...</h4>
      <Button secondary alert name="confirmDelete" onClick={(e) => onSubmit(e)}>
        Yes, delete my account.
      </Button>
    </>
  );

  return (
    <div>
      <ConfirmActionSection />
    </div>
  );
};

export default ProfileDelete;
