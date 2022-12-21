import React from "react";
import About from "../components/landing/About";

// Styled Components
import { FrostedContainer } from "../components/styles/Frost.styled";

const Landing = () => {
  return (
    <div
      style={{
        position: "absolute",
        minWidth: "400px",
        maxWidth: "40vw",
        left: "2em",
        top: "30vh",
        alignContent: "center",
        justifyContent: "start",
      }}>
      <FrostedContainer>
        <About />
      </FrostedContainer>
    </div>
  );
};

export default Landing;
