import React from "react";
import About from "../components/landing/About";
import { Outlet } from "react-router-dom";

// Styled Components
import { Content, Main, Side } from "../components/styles/Layout.styled";

const Landing = () => {
  return (
    <Main>
      <Side>
        <About />
      </Side>
      <Content>
        <Outlet />
      </Content>
    </Main>
  );
};

export default Landing;
