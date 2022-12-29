import React, { useState } from "react";

// Components
import ProfileDelete from "./ProfileDelete";
import ProfilePassword from "./ProfilePassword";

// Styled Components
import { Button } from "../styles/Button.styled";

const ProfileActions = () => {
  const [action, setAction] = useState(null);

  const handleClick = (e, action) => {
    e.preventDefault();
    setAction(action);
  };

  const RenderAction = () => {
    switch (action) {
      case "password":
        return <ProfilePassword />;

      case "delete":
        return <ProfileDelete />;

      default:
        return (
          <div
            style={{
              border: "1px solid red",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "start",
              alignItems: "center",
              gap: "1em",
              padding: "1em",
            }}>
            <Button
              handleExpand={setAction}
              onClick={(e) => handleClick(e, "password")}>
              Change password
            </Button>
            <Button
              handleExpand={setAction}
              onClick={(e) => handleClick(e, "delete")}>
              Delete account
            </Button>
          </div>
        );
    }
  };

  return <RenderAction />;
};

export default ProfileActions;
