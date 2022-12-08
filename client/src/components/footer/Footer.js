import React, { useState } from "react";

// Components
import Attributions from "../images/Attributions";

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
        <FooterFinePrint>&copy; Moonshot Space Lines, Inc.</FooterFinePrint>
        <FooterFinePrint>
          Terms and conditions apply to all offers and LightYear benefits. See
          specific offer for details.
        </FooterFinePrint>
      </FooterContainer>
    </>
  );
};

export default Footer;
