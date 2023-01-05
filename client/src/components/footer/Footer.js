import React, { useState } from "react";

// Components
import Attributions from "../images/Attributions";
import Socials from "./Socials";

// Styled components
import {
  FooterFinePrint,
  FooterLink,
  FooterGrid,
  Data,
  Buttons,
} from "../styles/Footer.styled";
import { Footer as FooterContainer } from "../styles/Layout.styled";

const Footer = () => {
  const [showAttributions, setShowAttributions] = useState(false);

  const FinePrint = () => {
    return (
      <>
        <FooterFinePrint>Developed by Nicolas Mortelliti.</FooterFinePrint>
        <FooterFinePrint>
          Capstone project submission for the Flatiron School Software
          Engineering program.
        </FooterFinePrint>
      </>
    );
  };

  const FooterData = () => {
    switch (showAttributions) {
      case true:
        return (
          <Data>
            <Attributions setShowAttributions={setShowAttributions} />
          </Data>
        );
      default:
        return (
          <Data>
            <FinePrint />
          </Data>
        );
    }
  };

  const AttributionsButton = () => (
    <Buttons>
      <FooterLink onClick={() => setShowAttributions(!showAttributions)}>
        {showAttributions ? "Hide Attributions" : "Show Attributions"}
      </FooterLink>
    </Buttons>
  );

  return (
    <FooterContainer>
      <FooterGrid>
        <FooterData />
        <Socials />
        <AttributionsButton />
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
