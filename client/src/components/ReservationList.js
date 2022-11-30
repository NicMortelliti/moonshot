import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReservations } from "../features/reservations/reservationSlice";

const ReservationList = () => {
  const dispatch = useDispatch();

  // Grab properties from reservation state
  const { reservations } = useSelector((state) => state.reservations);

  const getRes = (e) => {
    e.preventDefault();
    dispatch(getReservations);
  };

  return (
    <>
      <h1>List here:</h1>
      <button onClick={getRes}>Fetch</button>
      {reservations &&
        reservations.map((reservation) => <p>{reservation.origin.name}</p>)}
    </>
  );
};

export default ReservationList;
