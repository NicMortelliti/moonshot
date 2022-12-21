import React from "react";
import About from "../components/landing/About";

// Styled Components
import { FrostedContainer } from "../components/styles/Frost.styled";

const Landing = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        position: "absolute",
        // top: 0,
        left: 0,
        // bottom: 0,
        alignContent: "start",
        justifyContent: "start",
      }}>
      <FrostedContainer>
        <About />
      </FrostedContainer>
      <div></div>
    </div>
  );
};

export default Landing;
