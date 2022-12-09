import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Styled Components
import { Flex } from "../styles/Flex.styled";
import { SocialContainer, SocialListItem } from "../styles/Socials.styled";

const Socials = () => {
  return (
    <Flex>
      <SocialContainer>
        <SocialListItem fontSize="large">
          <FaLinkedin />
        </SocialListItem>
        <SocialListItem fontSize="large">
          <FaGithub />
        </SocialListItem>
      </SocialContainer>
    </Flex>
  );
};

export default Socials;
