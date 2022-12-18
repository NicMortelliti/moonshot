import React, { useState } from "react";
import styled from "styled-components";
import ActionConfirmation from "./components/ActionConfirmation";
import FeedbackMessage from "./components/FeedbackMessage";
import FlightDetails from "./components/FlightDetails";
import OriginDestinationGraphic from "./components/OriginDestinationGraphic";
import { useDispatch } from "react-redux";
import { deleteReservation } from "../../features/reservations/reservationSlice";
import { MinimalButton } from "../styles/Button.styled";

// This is the main container. It is where all data
// will reside. The cards background color, dimensions
// and layout are set here.
const MainContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Card = ({ data }) => {
  const [expandPanel, setExpandPanel] = useState(false);

  const dispatch = useDispatch();

  // Handle clicks go here
  // Handle reservation delete
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReservation(confirmationNumber));
  };

  // Destructure props
  const {
    id: confirmationNumber,
    flight: { id: flightId },
  } = data;

  // ------------------------------------
  // ------------------------------------
  //
  // Main
  //
  // ------------------------------------
  // ------------------------------------
  return (
    <MainContainer>
      <FeedbackMessage
        first="Far out!"
        second="You're going to space!"
        third="The following booking has been confirmed."
      />
      <FlightDetails data={data} />
      <OriginDestinationGraphic data={data} />
      <ActionConfirmation
        expand={expandPanel}
        first={`Are you sure you want to cancel your flight ${flightId}?`}
        second="This cannot be undone!"
        handleClick={handleDelete}
      />
      <MinimalButton
        alert={expandPanel ? false : true}
        onClick={() => setExpandPanel(!expandPanel)}>
        {expandPanel ? "Don't Cancel Reservation" : "Cancel Reservation"}
      </MinimalButton>
    </MainContainer>
  );
};

export default Card;
