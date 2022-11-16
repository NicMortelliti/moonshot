import React, { useEffect, useState } from "react";

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
    reservationsList
      ? reservationsList.map((each) => (
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
      : null;

  return (
    <div>
      <RenderCards />
    </div>
  );
}

export default ReservationsList;
