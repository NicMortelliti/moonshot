import React from "react";
import { Outlet } from "react-router-dom";

// Styled Components
import { Content, Main, Side } from "../components/styles/Layout.styled";

const Dashboard = () => {
  return (
    <Main>
      <Side>Side</Side>
      <Content>
        <Outlet />
      </Content>
    </Main>
  );
};

export default Dashboard;
