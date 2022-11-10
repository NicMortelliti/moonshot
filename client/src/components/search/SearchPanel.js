import React from "react";

// Components
import ButtonTile from "../widgets/ButtonTile";

function SearchPanel({ inputDataArray, handleClick }) {
  // Display available choices to user
  return inputDataArray.map((each) => {
    return (
      <ButtonTile
        key={each.id}
        id={each.id}
        title={each.name}
        subtitle={each.macro_place}
        handleClick={handleClick}
      />
    );
  });
}

export default SearchPanel;
