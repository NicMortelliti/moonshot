import React from "react";
import About from "../components/landing/About";
import { Outlet } from "react-router-dom";

// Styled Components
import { Content, Side } from "../components/styles/Layout.styled";

const Landing = () => {
  return (
    <>
      <Side>
        <About />
      </Side>
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default Landing;
