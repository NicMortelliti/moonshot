import React from "react";

// Components
import ProfileDelete from "./ProfileDelete";
import ProfilePassword from "./ProfilePassword";

// Stylec components
import { Legend } from "../styles/Widgets.styled";

const Profile = () => {
  const Header = () => (
    <>
      <h1>Account Settings</h1>
      <p>Here, you can update your password or delete your account..</p>
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
