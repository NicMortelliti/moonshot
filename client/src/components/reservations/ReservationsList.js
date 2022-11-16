import React, { useEffect } from "react";
import ReservationCancel from "./ReservationCancel";

// Components
import ReservationCard from "./ReservationCard";

function ReservationsList({
  reservationSetter,
  reservationsList,
  reservationsListSetter,
  reservationCancelSetter,
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
        key={each.id}
        data={each}
        setter={reservationSetter}
        reservationsList={reservationsList}
        reservationsListSetter={reservationsListSetter}
        reservationCancelSetter={reservationCancelSetter}
      />
    ));

  return <div>{reservationsList ? <RenderCards /> : null}</div>;
}

export default ReservationsList;
