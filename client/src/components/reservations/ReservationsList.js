import React, { useEffect, useState } from "react";

function ReservationsList() {
  const [apiResults, setApiResults] = useState("");

  // Fetch users reservations
  useEffect(() => {
    fetch("/reservations")
      .then((response) => response.json())
      .then((results) => setApiResults(results));
  }, []);

  // Display a card for each reservation
  const RenderCards = () =>
    apiResults.map((each) => {
      return (
        <div key={each.id}>
          <h3>From:</h3>
          <p>
            {each.origin.name}, {each.origin.macro_place}
          </p>
          <h3>To:</h3>
          <p>
            {each.destination.name}, {each.destination.macro_place}
          </p>
        </div>
      );
    });

  return <div>{apiResults ? <RenderCards /> : null}</div>;
}

export default ReservationsList;
