import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../features/reservations/reservationSlice";

// Styled Components
import CardList from "../card/CardList";
import JumpToSearch from "./components/JumpToSearch";

const Reservations = () => {
  const dispatch = useDispatch();

  // Get reservations from API when component loads
  useEffect(() => {
    dispatch(getReservations());
  }, []);

  // Grab properties from reservation state
  const { reservations, isLoading } = useSelector(
    (state) => state.reservations
  );

  // Redirect user to the booking page
  const redirectToBooking = () => {
  };

  const Render = () => {
    switch (reservations) {
      case null:
        return <JumpToSearch handleClick={redirectToBooking} />;

      default:
        return (
          <CardList
            cards={reservations}
            isLoading={isLoading}
            typeOfList="reservation"
          />
        );
    }
  };

  return <Render />;
};

export default Reservations;
