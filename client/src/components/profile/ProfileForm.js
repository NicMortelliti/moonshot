import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProfilePassword from "./ProfilePassword";

// Styled Components
import { Button } from "../styles/Button.styled";
import { Legend } from "../styles/Widgets.styled";

const ProfileForm = () => {
  const [displaySection, setDisplaySection] = useState(null);

  const {
    user: { first_name: firstName, last_name: lastName },
  } = useSelector((state) => state.auth);

  // Switch function that will only display the selected
  // profile update section. For example, if the "change
  // password" button is clicked, the 'displaySection'
  // is set to 'password'. When the switch finds the case
  // 'password' it will then render the password change section.
  const RenderSection = () => {
    switch (displaySection) {
      case "password":
        return <ProfilePassword setDisplaySection={setDisplaySection} />;

      default:
        return null;
    }
  };

  // This function will render a button with the specified
  // field ('name') and text (button label). Meant to be a
  // shared component so we can add more profile update
  // sections in the future.
  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.name === "password") {
      if (displaySection === "password") {
        setDisplaySection(null);
      } else {
        setDisplaySection("password");
      }
    }
  };

  // TODO Add a way to delete user account

  return (
    <>
      <h1>Your profile</h1>
      <Legend>Name</Legend>
      <p name="first-last-name">
        {firstName} {lastName}
      </p>
      <Button
        secondary
        name="password"
        text="Change password"
        handleClick={handleClick}
      />
      <RenderSection />
    </>
  );
};

export default ProfileForm;
