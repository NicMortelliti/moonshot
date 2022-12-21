import React, { useState } from "react";

// Components
import Attributions from "../images/Attributions";
import Socials from "./Socials";

// Styled components
import { FooterFinePrint, FooterLink } from "../styles/Footer.styled";
import { Footer as FooterContainer } from "../styles/Layout.styled";

const Footer = () => {
  const [showAttributions, setShowAttributions] = useState(false);

  const FinePrint = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "stretch",
          alignItems: "stretch",
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
    <FooterContainer>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 999,
        }}> */}
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}>
        <DetermineFooter />
        <FooterLink onClick={() => setShowAttributions(!showAttributions)}>
          {showAttributions ? "Hide Attributions" : "Show Attributions"}
        </FooterLink>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Socials />
      </div>
      {/* </div> */}
    </FooterContainer>
  );
};

export default Footer;
