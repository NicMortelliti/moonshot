import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../features/auth/authSlice";

// Styled components
import { Button } from "../styles/Button.styled";

const ProfileDelete = () => {
  const [showSection, setShowSection] = useState(false);
  const {
    user: { id: userId },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const ShowSectionControl = () => (
    <Button
      alert={showSection ? false : true}
      secondary
      name="deleteAccount"
      text={showSection ? "Delete account" : "Nevermind! Don't delete account."}
      handleClick={() => setShowSection(!showSection)}
    />
  );

  return (
    <div>
      <ShowSectionControl />
    </div>
  );
};

export default ProfileDelete;
