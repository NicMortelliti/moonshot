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
import { Flex } from "../styles/Flex.styled";

const Footer = () => {
  const [showAttributions, setShowAttributions] = useState(false);

  const FinePrint = () => {
    return (
      <>
        <Flex direction="column" justify="center" align="flex-start">
          <FooterFinePrint>Developed by Nicolas Mortelliti.</FooterFinePrint>
          <FooterFinePrint>
            Capstone project submission for the Flatiron School Software
            Engineering program.
          </FooterFinePrint>
        </Flex>
      </>
    );
  };

  const DetermineFooter = () => {
    switch (showAttributions) {
      case true:
        return <Attributions setShowAttributions={setShowAttributions} />;

      default:
        return <FinePrint />;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        opacity: 0.7,
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
      }}>
      <DetermineFooter />
      <div>
        <Socials />
        <FooterLink onClick={() => setShowAttributions(!showAttributions)}>
          {showAttributions ? "Hide Attributions" : "Show Attributions"}
        </FooterLink>
      </div>
    </div>
  );
};

export default Footer;
