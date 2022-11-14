import React from "react";

function SearchBookingDetails({ details }) {
  return (
    <div>
      <h1>Success!</h1>
      <h2>Flight: {details.flight.id}</h2>
      <h3>
        From: {details.origin.name}, {details.origin.macro_place}
      </h3>
      <h3>
        To: {details.destination.name}, {details.destination.macro_place}
      </h3>
    </div>
  );
}

export default SearchBookingDetails;
