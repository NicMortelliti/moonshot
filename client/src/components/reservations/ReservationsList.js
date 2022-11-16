import React, { useEffect } from "react";

// Components
import ReservationCard from "./ReservationCard";

function ReservationsList({
  reservationSetter,
  reservationsList,
  reservationsListSetter,
}) {
  // Fetch users reservations
  useEffect(() => {
    fetch("/reservations")
      .then((response) => response.json())
      .then((results) => reservationsListSetter(results));
  }, []);

  // Display a card for each reservation
  const RenderCards = () =>
    reservationsList.map((each) => (
      <ReservationCard
        data={each}
        setter={reservationSetter}
        reservationsList={reservationsList}
        reservationsListSetter={reservationsListSetter}
      />
    ));

  return <div>{reservationsList ? <RenderCards /> : null}</div>;
}

export default ReservationsList;
