import React from "react";
import planet from "../components/images/planet.jpg";
import { FrostedContainer } from "../components/styles/Frost.styled";

const Landing = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundImage: `url(${planet})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        top: "-70px",
        bottom: 0,
        left: 0,
        right: 0,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <FrostedContainer></FrostedContainer>
    </div>
  );
};

export default Landing;
