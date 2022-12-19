import React from "react";
import planet from "../components/images/planet.jpg";
import About from "../components/landing/About";

// Styled Components
import { FrostedContainer } from "../components/styles/Frost.styled";

const Landing = () => {
  return (
    <FrostedContainer>
      <About />
    </FrostedContainer>
  );
};

export default Landing;
