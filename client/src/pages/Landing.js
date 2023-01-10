import React from "react";
import About from "../components/landing/About";
import { Outlet, useLocation } from "react-router-dom";

// Styled Components
import { Content, Side } from "../components/styles/Layout.styled";
import { Flex } from "../components/styles/Flex.styled";

const Landing = () => {
  const location = useLocation();

  // Show the Login or Register page
  const loginRegisterPage = (
    <>
      <Side>
        <About />
      </Side>
      <Content center frosted>
        <Outlet />
      </Content>
    </>
  );

  // Show the About blurb on the home page
  const homePage = (
    <Content frosted>
      <Flex direction="column" margin="auto" justifyContent="center">
        <About />
      </Flex>
    </Content>
  );

  let content;
  switch (location.pathname) {
    case "/login":
    case "/register":
      content = loginRegisterPage;
      break;

    default:
      content = homePage;
      break;
  }

  return content;
};

export default Landing;
