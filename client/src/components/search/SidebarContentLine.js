import React from "react";

const SidebarContentLine = ({ data: { name, macro_place: macroPlace } }) => {
  return (
    <p>
      {name}, {macroPlace}
    </p>
  );
};

export default SidebarContentLine;
