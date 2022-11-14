import React from "react";

function SearchNumber({ min, max, setter }) {
  // When clicked, set state to buttons id
  const handleClick = (e) => {
    e.preventDefault();
    setter(e.target.id);
  };

  // Must create an array to push each button into.
  // Without pushing into array, the for loop exits
  // after one cycle when the first return is hit.
  const RenderButtons = () => {
    const array = [];

    for (var i = min; i <= max; i++) {
      array.push(
        <button key={i} id={i} onClick={(e) => handleClick(e)}>
          {i}
        </button>
      );
    }

    return array;
  };

  return <RenderButtons />;
}

export default SearchNumber;
