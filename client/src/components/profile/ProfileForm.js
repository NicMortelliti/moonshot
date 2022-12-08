import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import ProfilePassword from "./ProfilePassword";

// Styled Components
import { Button } from "../styles/Button.styled";

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
  const SectionButton = ({ field, text }) => {
    return (
      <Button
        name={field}
        onClick={() =>
          setDisplaySection(displaySection === field ? null : field)
        }>
        {text}
      </Button>
    );
  };

  return (
    <div>
      <div className="heading">
        <h1>
          <FaUser /> Your profile
        </h1>
        <div name="first-last-name-container">
          <label htmlFor="first-last-name">Name</label>
          <p name="first-last-name">
            {firstName} {lastName}
          </p>
        </div>
      </div>
      <div>
        <SectionButton field="password" text="Change password" />
      </div>
      <RenderSection />
    </div>
  );
};

export default ProfileForm;
