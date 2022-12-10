import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Styled Components
import { StyledSocialIcons } from "../styles/Socials.styled";

const Socials = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://linkedin.com/in/nicolas-mortelliti">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com/NicMortelliti">
          <FaGithub />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

export default Socials;
