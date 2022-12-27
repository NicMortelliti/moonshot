import React from "react";
import { Outlet } from "react-router-dom";

// Styled Components
import { Content } from "../components/styles/Layout.styled";

const Dashboard = () => {
  return (
    <Content frosted>
      <Outlet />
    </Content>
  );
};

export default Dashboard;
