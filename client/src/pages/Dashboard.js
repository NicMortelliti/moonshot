import React from "react";
import { Outlet } from "react-router-dom";

// Styled Components
import { Content, Side } from "../components/styles/Layout.styled";

const Dashboard = () => {
  return (
    <>
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default Dashboard;
