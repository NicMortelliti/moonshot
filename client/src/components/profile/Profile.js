import React from "react";
import ProfileForm from "./ProfileForm";

// TODO Add delete user
// TODO Style page

const Profile = () => {
  return (
    <div style={{ alignItems: "start", justifyContent: "start", textAlign: "start" }}>
      <h1>Your profile</h1>
      <ProfileForm />
    </div>
  );
};

export default Profile;
