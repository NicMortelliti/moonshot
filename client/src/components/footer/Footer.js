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
    <Flex bottom="0" position="fixed">
      <FooterContainer>
        <Flex direction="column">
          <Flex>
            <DetermineFooter />
            <Flex justify="flex-end" align="flex-end" direction="column">
              <Socials />
              <FooterLink
                onClick={() => setShowAttributions(!showAttributions)}>
                {showAttributions ? "Hide Attributions" : "Show Attributions"}
              </FooterLink>
            </Flex>
          </Flex>
        </Flex>
      </FooterContainer>
    </Flex>
  );
};

export default Footer;
