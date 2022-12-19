import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getReservations } from "../../features/reservations/reservationSlice";

// Styled Components
import CardList from "../card/CardList";
import JumpToSearch from "./components/JumpToSearch";

const Reservations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get reservations from API when component loads
  useEffect(() => {
    dispatch(getReservations());
  }, []);

  // Grab properties from reservation state
  const { reservations, isLoading } = useSelector(
    (state) => state.reservations
  );

  const backup = () => <JumpToSearch handleClick={redirectToBooking} />;

  // Redirect user to the booking page
  const redirectToBooking = () => {
    navigate("/flight-search");
  };

  return (
    <div>
      <CardList
        cards={reservations}
        isLoading={isLoading}
        backup={backup}
        typeOfList="reservation"
      />
    </div>
  );
};

export default Reservations;
