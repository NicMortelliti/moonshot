import React from "react";

function SearchNumber({ min, max, setter }) {
  const handleClick = (e) => {
    e.preventDefault();
    setter(e.target.id);
  };

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
