import React from "react";

function SearchTimeline({
  origin,
  destination,
  flight,
  originSetter,
  destinationSetter,
  flightSetter,
}) {
  const reset = (e) => {
    switch (e.target.name) {
      case "origin":
        destinationSetter("");
        originSetter("");
        flightSetter("");
        break;
      case "destination":
        destinationSetter("");
        flightSetter("");
        break;
      case "flight":
        flightSetter("");
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
      {flight ? (
        <button name="flight" onClick={(e) => reset(e)}>
          {flight.id} {flight.departure}
        </button>
      ) : null}
    </div>
  );
}

export default SearchTimeline;
