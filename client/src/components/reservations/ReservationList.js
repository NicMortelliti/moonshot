import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../features/reservations/reservationSlice";
import { useNavigate } from "react-router-dom";

// Components
import ReservationCard from "./ReservationCard";

// Styled Components
import { Flex } from "../styles/Flex.styled";
import { Button } from "../styles/Button.styled";
import { ReservationContainer } from "../styles/Card.styled";

const ReservationList = () => {
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

  // Redirect user to the booking page
  const redirectToBooking = () => {
    navigate("/flight-search");
  };

  // Display each reservation or a message to user
  const RenderReservations = () => {
    switch (true) {
      case isLoading:
        return <p>Loading...</p>;
      case reservations !== null:
        // Display reservations if there are any
        return reservations.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ));
      default:
        return (
          <Flex direction="column">
            <p>You have no reservations.</p>
            <Button onClick={redirectToBooking}>Book one!</Button>
          </Flex>
        );
    }
  };

  return (
    <>
      <ReservationContainer>
        <RenderReservations />
      </ReservationContainer>
    </>
  );
};

export default ReservationList;
