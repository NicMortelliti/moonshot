import React from "react";

// Components
import ReservationCard from "./ReservationCard";

function ReservationsList({
  reservationSetter,
  reservationsList,
  reservationsListSetter,
  reservationCancelSetter,
  reservationChangeSetter,
}) {
  // Display a card for each reservation
  const RenderCards = () =>
    reservationsList.length > 0 ? (
      reservationsList.map((each) => (
        <ReservationCard
          key={each.id}
          data={each}
          setter={reservationSetter}
          reservationsList={reservationsList}
          reservationsListSetter={reservationsListSetter}
          reservationCancelSetter={reservationCancelSetter}
          reservationChangeSetter={reservationChangeSetter}
        />
      ))
    ) : (
      <h1>You have no reservations</h1>
    );

  return (
    <div>
      <RenderCards />
    </div>
  );
}

export default ReservationsList;
