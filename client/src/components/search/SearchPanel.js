import React from "react";

// Components
import ButtonTile from "../widgets/ButtonTile";

function SearchPanel({ inputDataArray, handleClick }) {
  // Display available choices to user
  return inputDataArray.map((each) => (
    <ButtonTile
      key={each.id}
      id={each.id}
      title={each.name ? each.name : each.departure}
      subtitle={each.macro_place ? each.macro_place : each.arrival}
      handleClick={handleClick}
    />
  ));
}

export default SearchPanel;
