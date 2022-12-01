import React from "react";
import { useSelector } from "react-redux";

// Components
import ReservationCard from "./ReservationCard";

const ReservationList = () => {
  // Grab properties from reservation state
  const { reservations } = useSelector((state) => state.reservations);

  return (
    <>
      {reservations
        ? reservations.map((reservation) => (
            <ReservationCard key={reservation.id} reservation={reservation} />
          ))
        : null}
    </>
  );
};

export default ReservationList;
