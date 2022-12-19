import React from "react";
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
