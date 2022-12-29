import React from "react";

// Components
import ProfileActions from "./ProfileActions";

// Styled components
import { H1, P } from "../styles/Text.styled";
import { ProfileSection } from "../styles/Profile.styled";

const Profile = () => {
  const Header = () => (
    <div>
      <H1 light>Account Settings</H1>
      <P light>Here, you can update your password or delete your account.</P>
    </div>
  );

  return (
    <ProfileSection>
      <Header />
      <ProfileActions />
    </ProfileSection>
  );
};

export default Profile;
