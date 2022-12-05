import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import ProfilePassword from "./ProfilePassword";

const ProfileForm = () => {
  const [displaySection, setDisplaySection] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const RenderSection = () => {
    switch (displaySection) {
      case "password":
        return <ProfilePassword />;

      default:
        return null;
    }
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
        <button onClick={() => setDisplaySection("password")}>
          Change password
        </button>
      </div>
      <RenderSection />
    </div>
  );
};

export default ProfileForm;
