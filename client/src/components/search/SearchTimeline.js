import React from "react";

function SearchTimeline({
  origin,
  destination,
  originSetter,
  destinationSetter,
}) {
  const reset = (e) => {
    switch (e.target.name) {
      case "origin":
        destinationSetter("");
        originSetter("");
        break;
      case "destination":
        destinationSetter("");
        break;
      default:
        break;
    }
  };
  return (
    <div>
      {origin ? (
        <button name="origin" onClick={(e) => reset(e)}>
          {origin.name}, {origin.macro_place}
        </button>
      ) : null}
      {destination ? (
        <button name="destination" onClick={(e) => reset(e)}>
          {destination.name}, {destination.macro_place}
        </button>
      ) : null}
    </div>
  );
}

export default SearchTimeline;
