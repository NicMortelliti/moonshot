import React from "react";

// Components
import ProfileActions from "./ProfileActions";

// Styled components
import { H1 } from "../styles/Text.styled";
import { ProfileSection } from "../styles/Profile.styled";
import { Content } from "../styles/Layout.styled";
import { ResultsHeader } from "../styles/Search.styled";

const Profile = () => {
  const Header = () => (
    <>
      <ResultsHeader>
        <H1 fancy light>
          Account Settings
        </H1>
      </ResultsHeader>
    </>
  );

  return (
    <Content frosted>
      <ProfileSection>
        <Header />
        <ProfileActions />
      </ProfileSection>
    </Content>
  );
};

export default Profile;
