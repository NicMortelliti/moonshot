import React, { useEffect, useState } from "react";

// Components
import ReservationCard from "./ReservationCard";

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
    apiResults.map((each) => <ReservationCard data={each} />);

  return <div>{apiResults ? <RenderCards /> : null}</div>;
}

export default ReservationsList;
