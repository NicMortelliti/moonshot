import React, { useEffect, useState } from "react";

function SearchLocation({ data, setter, blockedLocation }) {
  const handleClick = (e, data) => {
    e.preventDefault();
    setter(data);
  };

  useEffect(() => {
    console.log(data);
  }, []);

  const RenderButtons = () => {
    data.map((each) => {
      if (blockedLocation !== each.id) {
        return (
          <button
            key={each.id}
            id={each.id}
            onClick={(e) => handleClick(e, each)}>
            {each.name}
          </button>
        );
      }
    });
  };

  return <RenderButtons />;
}

export default SearchLocation;
