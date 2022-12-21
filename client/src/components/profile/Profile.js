import React from "react";
import ProfileForm from "./ProfileForm";

// Styled components
import { FrostedContainer, FrostedWallpaper } from "../styles/Frost.styled";

// TODO Add delete user
// TODO Style page

const Profile = () => {
  return (
    <FrostedWallpaper>
      <FrostedContainer>
        <ProfileForm />
      </FrostedContainer>
    </FrostedWallpaper>
  );
};

export default Profile;
