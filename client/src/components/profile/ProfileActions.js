import React, { useState } from "react";

// Components
import ProfileDelete from "./ProfileDelete";
import ProfilePassword from "./ProfilePassword";

// Styled Components
import { Button } from "../styles/Button.styled";
import { ProfileActionSection } from "../styles/Profile.styled";

const ProfileActions = () => {
  const [action, setAction] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    setAction(e.target.name);
  };

  const RenderAction = () => {
    switch (action) {
      case "password":
        return <ProfilePassword setAction={setAction} />;

      case "delete":
        return <ProfileDelete setAction={handleClick} />;

      default:
        return (
          <ProfileActionSection>
            <Button name="password" onClick={(e) => handleClick(e)}>
              Change password
            </Button>
            <Button name="delete" onClick={(e) => handleClick(e)}>
              Delete account
            </Button>
          </ProfileActionSection>
        );
    }
  };

  return <RenderAction />;
};

export default ProfileActions;
