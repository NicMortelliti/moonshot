import React from "react";
import About from "../components/landing/About";
import { Outlet } from "react-router-dom";

// Styled Components
import { Side } from "../components/styles/Layout.styled";

const Landing = () => {
  return (
    <>
      <Side>
        <About />
      </Side>
      <Outlet />
    </>
  );
};

export default Landing;
