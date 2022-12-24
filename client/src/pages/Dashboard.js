import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/search/Sidebar";

// Styled Components
import { Content, Side } from "../components/styles/Layout.styled";

const Dashboard = () => {
  return (
    <>
      <Side>
        <Sidebar />
      </Side>
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default Dashboard;
