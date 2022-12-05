import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import ProfilePassword from "./ProfilePassword";

const ProfileForm = () => {
  const [displaySection, setDisplaySection] = useState(null);

  // Switch function that will only display the selected
  // profile update section. For example, if the "change
  // password" button is clicked, the 'displaySection'
  // is set to 'password'. When the switch finds the case
  // 'password' it will then render the password change section.
  const RenderSection = () => {
    switch (displaySection) {
      case "password":
        return <ProfilePassword />;

      default:
        return null;
    }
  };

  // This function will render a button with the specified
  // field ('name') and text (button label). Meant to be a
  // shared component so we can add more profile update
  // sections in the future.
  const Button = ({ field, text }) => {
    return (
      <button
        name={field}
        onClick={() =>
          setDisplaySection(displaySection === field ? null : field)
        }
      >
        {text}
      </button>
    );
  };

  return (
    <div>
      <div className="heading">
        <h1>
          <FaUser /> Login
        </h1>
        <p>Profile details</p>
      </div>
      <div>
        <Button field="password" text="Change password" />
      </div>
      <RenderSection />
    </div>
  );
};

export default ProfileForm;
