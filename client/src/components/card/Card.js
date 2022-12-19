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

const Card = ({ data, typeOfList = null }) => {
  const [expandPanel, setExpandPanel] = useState(false);

  const dispatch = useDispatch();

  // Handle clicks go here
  // Handle reservation delete
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReservation(confirmationNumber));
  };

  // Here we check to see if the data set contains
  // a value for "reservations_remaining". If there
  // IS NO value (null), we set the
  // "confirmationIsDisplayed" variable to true
  // because we should be displaying a booking
  // confirmation page to the user.
  const confirmationIsDisplayed = data.reservations_remaining === null;
  let confirmationNumber, flightId, origin, destination, departure, arrival;
  if (data) {
    origin = data.origin ? data.origin : data.flight.origin;
    destination = data.destination ? data.destination : data.flight.destination;
    departure = data.departure ? data.departure : data.flight.departure;
    arrival = data.arrival ? data.arrival : data.flight.arrival;

    switch (confirmationIsDisplayed) {
      case true:
        confirmationNumber = data.id;
        flightId = data.flight.id;
        break;

      case false:
        confirmationNumber = null;
        flightId = data.id;
        break;

      default:
        break;
    }

    // If we're showing a reservation list, set
    // the below variables accordingly.
    switch (typeOfList) {
      case "reservation":
        confirmationNumber = data.id;
        flightId = data.flight.id;
        break;
      default:
        break;
    }
  }

  const messages = {
    confirmation: flightId
      ? {
          feedback: {
            first: "Far out!",
            second: "You're going to space!",
            third: "The following booking has been confirmed.",
          },
          action: {
            first: null,
            second: null,
          },
          confirmation: {
            main: "Ok!",
            alt: null,
          },
        }
      : null,
    search: {
      feedback: {
        first: null,
        second: null,
        third: null,
      },
      action: {
        first: null,
        second: null,
      },
      confirmation: {
        main: null,
        alt: null,
      },
    },
    reservation: {
      feedback: {
        first: "",
        second: null,
        third: "The following booking has been confirmed.",
      },
      action: {
        first: `Are you sure you want to cancel your flight ${flightId}?`,
        second: "This cannot be undone!",
      },
      confirmation: {
        main: "Don't Cancel Reservation",
        alt: "Cancel Reservation",
      },
    },
  };

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
        first={messages[typeOfList].feedback.first}
        second={messages[typeOfList].feedback.second}
        third={messages[typeOfList].feedback.third}
      />
      <FlightDetails
        data={data}
        flightId={flightId}
        confirmationNumber={confirmationNumber}
      />
      <OriginDestinationGraphic
        origin={origin}
        destination={destination}
        departure={departure}
        arrival={arrival}
      />
      <ActionConfirmation
        expand={expandPanel}
        first={messages[typeOfList].action.first}
        second={messages[typeOfList].action.second}
        handleClick={handleDelete}
      />
      <MinimalButton
        alert={expandPanel ? false : true}
        onClick={() => setExpandPanel(!expandPanel)}>
        {expandPanel
          ? messages[typeOfList].confirmation.main
          : messages[typeOfList].confirmation.alt}
      </MinimalButton>
    </MainContainer>
  );
};

export default Card;
