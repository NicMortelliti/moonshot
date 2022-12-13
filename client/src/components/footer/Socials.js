import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Styled Components
import { StyledSocialIcons } from "../styles/Socials.styled";
import { Flex } from "../styles/Flex.styled";

const Socials = () => {
  return (
    <Flex justify="flex-end">
      <StyledSocialIcons>
        <li>
          <a href="https://linkedin.com/in/nicolas-mortelliti">
            <FaLinkedin />
          </a>
        </li>
      </StyledSocialIcons>
      <StyledSocialIcons>
        <li>
          <a href="https://github.com/NicMortelliti">
            <FaGithub />
          </a>
        </li>
      </StyledSocialIcons>
    </Flex>
  );
};

export default Socials;
