import React from "react";
import { useSelector } from "react-redux";
import SidebarContentLine from "./SidebarContentLine";

// Styled components
import { Legend } from "../styles/Widgets.styled";

const Sidebar = () => {
  const { origin, destination } = useSelector((state) => state.booking);

  return (
    <>
      <Legend>To: </Legend>
      {origin ? <SidebarContentLine data={origin} /> : null}

      <Legend>From: </Legend>
      {destination ? <SidebarContentLine data={destination} /> : null}
    </>
  );
};

export default Sidebar;
