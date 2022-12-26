import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/search/Sidebar";

// Styled Components
import { Content, Side } from "../components/styles/Layout.styled";

const Dashboard = () => {
  return (
    <Content style={{ background: "pink", alignSelf: "stretch" }}>
      <Outlet />
    </Content>
  );
};

export default Dashboard;
