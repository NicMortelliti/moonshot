import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getReservations } from "../../features/reservations/reservationSlice";

// Styled Components
import CardList from "../card/CardList";
import { Button } from "../styles/Button.styled";

const JumpToBookFlights = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

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

  const backup = () => {
    return (
      <JumpToBookFlights>
        <p>You have no reservations.</p>
        <Button onClick={redirectToBooking}>Book one!</Button>
      </JumpToBookFlights>
    );
  };

  // Redirect user to the booking page
  const redirectToBooking = () => {
    navigate("/flight-search");
  };

  return (
    <div>
      <CardList cards={reservations} isLoading={isLoading} backup={backup} />
    </div>
  );
};

export default Reservations;
