import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Styled Components
import { Socials as SocialsWrapper } from "../styles/Footer.styled";
import { StyledSocialIcons } from "../styles/Socials.styled";

const Socials = () => {
  // This is an object containing the icons and links
  // to my personal social accounts. This object gets
  // mapped through in the "RenderSocials" function
  // to render them to the page.
  const socialsData = [
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/nicolas-mortelliti",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/NicMortelliti",
    },
  ];

  // For each social within socialsData, we
  // will create a separate styled social icon.
  const RenderSocials = () =>
    socialsData.map((each, i) => {
      return (
        <StyledSocialIcons key={i}>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
            }}>
            <a style={{ margin: 0 }} href={each.link}>
              {each.icon}
            </a>
          </li>
        </StyledSocialIcons>
      );
    });

  return (
    <SocialsWrapper>
      <RenderSocials />
    </SocialsWrapper>
  );
};

export default Socials;
