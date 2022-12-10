import React, { useState } from "react";

// Components
import Attributions from "../images/Attributions";
import Socials from "./Socials";

// Styled components
import {
  FooterContainer,
  FooterFinePrint,
  FooterLink,
} from "../styles/Footer.styled";

const Footer = () => {
  const [showAttributions, setShowAttributions] = useState(false);

  return (
    <>
      {showAttributions ? (
        <Attributions setShowAttributions={setShowAttributions} />
      ) : null}
      <FooterContainer>
        <FooterFinePrint>
          <FooterLink onClick={() => setShowAttributions(!showAttributions)}>
            Show Attributions
          </FooterLink>
        </FooterFinePrint>
        <FooterFinePrint>
          Website developed by Nicolas Mortelliti.
        </FooterFinePrint>
        <FooterFinePrint>
          Capstone project submission for the Flatiron School Software
          Engineering program.
        </FooterFinePrint>
        <Socials />
      </FooterContainer>
    </>
  );
};

export default Footer;
