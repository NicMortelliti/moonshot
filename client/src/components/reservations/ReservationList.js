import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../features/reservations/reservationSlice";

// Components
import ReservationCard from "./ReservationCard";

const ReservationList = () => {
  const dispatch = useDispatch();

  // Get reservations from API when component loads
  useEffect(() => {
    dispatch(getReservations());
  }, []);

  // Grab properties from reservation state
  const { reservations } = useSelector((state) => state.reservations);

  const RenderReservations = () => {
    return reservations.map((reservation) => (
      <ReservationCard key={reservation.id} reservation={reservation} />
    ));
  };

  return <>{reservations ? <RenderReservations /> : null}</>;
};

export default ReservationList;
