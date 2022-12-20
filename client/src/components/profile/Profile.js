import React from "react";
import { useSelector } from "react-redux";

import ProfilePassword from "./ProfilePassword";
import ProfileDelete from "./ProfileDelete";

// Styled components
import { FrostedContainer } from "../styles/Frost.styled";
import { Legend } from "../styles/Widgets.styled";

// TODO Add delete user

const Profile = () => {
  const {
    user: { first_name: firstName, last_name: lastName },
  } = useSelector((state) => state.auth);

  const Header = () => (
    <>
      <h1>Your profile</h1>
      <Legend>Name</Legend>
      <p name="first-last-name">
        {firstName} {lastName}
      </p>
    </>
  );

  return (
    <FrostedContainer>
      <Header />
      <ProfilePassword />
      <ProfileDelete />
    </FrostedContainer>
  );
};

export default Profile;
