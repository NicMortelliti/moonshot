import React from "react";

function SearchLocation({ data, setter, blockedLocation }) {
  const handleClick = (e, location) => {
    e.preventDefault();
    setter(location);
  };

  const RenderButtons = () =>
    data.map((each) => {
      if (
        // Only run this if statement if blockedLocation
        // exists (i.e. Only run if origin has already
        // been selected)
        typeof blockedLocation != undefined &&
        blockedLocation.macro_place !== each.macro_place
      ) {
        return (
          <button
            key={each.id}
            id={each.id}
            onClick={(e) => handleClick(e, each)}>
            {each.name}
          </button>
        );
      } else {
        return null;
      }
    });

  return <RenderButtons />;
}

export default SearchLocation;
