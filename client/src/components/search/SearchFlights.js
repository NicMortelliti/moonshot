import React from "react";

function SearchFlights({ data, setter }) {
  const handleClick = (e, location) => {
    e.preventDefault();
    setter(location);
  };

  const RenderButtons = () =>
    data.map((each) => {
      return (
        <button
          key={each.id}
          id={each.id}
          onClick={(e) => handleClick(e, each)}>
          <p>{each.departure}</p>
          <p>{each.arrival}</p>
          <p>
            {each.origin.name}, {each.origin.macro_place} to{" "}
            {each.destination.name}, {each.destination.macro_place}
          </p>
        </button>
      );
    });

  return <RenderButtons />;
}

export default SearchFlights;
