import React from "react";

// Components
import ProfileDelete from "./ProfileDelete";
import ProfilePassword from "./ProfilePassword";

// Stylec components
import { H1, P } from "../styles/Text.styled";

const Profile = () => {
  const Header = () => (
    <>
      <H1 light>Account Settings</H1>
      <P light>Here, you can update your password or delete your account.</P>
    </>
  );

  return (
    <div
      style={{
        alignItems: "start",
        justifyContent: "start",
        textAlign: "start",
      }}>
      <Header />
      <ProfilePassword />
      <ProfileDelete />
    </div>
  );
};

export default Profile;
