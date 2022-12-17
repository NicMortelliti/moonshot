import React, { useState } from "react";

// Components
import Attributions from "../images/Attributions";
import Socials from "./Socials";

// Styled components
import { FooterFinePrint, FooterLink } from "../styles/Footer.styled";
import { Flex } from "../styles/Flex.styled";

const Footer = () => {
  const [showAttributions, setShowAttributions] = useState(false);

  const FinePrint = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "flex-start",
          border: "2px dotted blue",
        }}>
        <FooterFinePrint>Developed by Nicolas Mortelliti.</FooterFinePrint>
        <FooterFinePrint>
          Capstone project submission for the Flatiron School Software
          Engineering program.
        </FooterFinePrint>
      </div>
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
        display: "flex",
        backgroundColor: "black",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        border: "2px dotted red",
      }}>
      <div
        style={{
          border: "2px dotted yellow",
          display: "flex",
          flexDirection: "column",
        }}>
        <DetermineFooter />
      </div>
      <div
        style={{
          border: "2px dotted green",
          display: "flex",
          flexDirection: "column",
        }}>
        <Socials />
        <FooterLink onClick={() => setShowAttributions(!showAttributions)}>
          {showAttributions ? "Hide Attributions" : "Show Attributions"}
        </FooterLink>
      </div>
    </div>
  );
};

export default Footer;
