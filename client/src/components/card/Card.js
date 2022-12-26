import React, { useState } from "react";
import ActionConfirmation from "./components/ActionConfirmation";
import FeedbackMessage from "./components/FeedbackMessage";
import FlightDetails from "./components/FlightDetails";
import OriginDestinationGraphic from "./components/OriginDestinationGraphic";
import { useDispatch, useSelector } from "react-redux";
import { deleteReservation } from "../../features/reservations/reservationSlice";
import { bookFlight } from "../../features/booking/bookingSlice";

// Styled components
import { Button } from "../styles/Button.styled";
import { CardContainer } from "../styles/Card.styled";
import { useNavigate } from "react-router-dom";

const Card = ({ data, typeOfList = null }) => {
  const [expandPanel, setExpandPanel] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { user: userId } = user;

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
            buttonText: null,
          },
          confirmation: {
            alt: null,
            altBtn: null,
            altBtnAction: null,
            main: "Ok!",
            mainBtn: "secondary",
            mainBtnAction: null,
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
        first: `Reserve a seat on flight ${flightId}?`,
        second: null,
        buttonText: "Yes, book it!",
        secondaryButtonType: false,
      },
      confirmation: {
        alt: "Nevermind",
        main: "Book Flight",
        mainBtn: null,
        altBtn: true,
      },
    },
    reservation: {
      feedback: {
        first: "",
        second: "You are booked on the following flight:",
        third: null,
      },
      action: {
        first: `Cancel your reservation on flight ${flightId}?`,
        second: "This cannot be undone!",
        buttonText: "Yes, cancel reservation.",
        secondaryButtonType: true,
        alert: true,
      },
      confirmation: {
        alt: "Don't Cancel Reservation",
        main: "Cancel Reservation",
      },
    },
  };

  // Click handlers
  const handleClick = (e) => {
    e.preventDefault();

    switch (typeOfList) {
      case "reservation":
        dispatch(deleteReservation(confirmationNumber));
        break;

      case "search":
        dispatch(bookFlight({ userId, flightId }));
        break;

      case "confirmation":
        navigate("/my-trips");
        break;

      default:
        break;
    }
  };

  // ------------------------------------
  // ------------------------------------
  //
  // Main
  //
  // ------------------------------------
  // ------------------------------------
  return (
    <CardContainer>
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
      {expandPanel ? (
        <ActionConfirmation
          first={messages[typeOfList].action.first}
          second={messages[typeOfList].action.second}
          buttonText={messages[typeOfList].action.buttonText}
          alert={messages[typeOfList].action.alert}
          secondaryButtonType={messages[typeOfList].action.secondaryButtonType}
          handleClick={handleClick}
        />
      ) : null}

      {typeOfList === "confirmation" ? (
        <Button
          secondary={
            expandPanel
              ? messages[typeOfList].confirmation.altBtn
              : messages[typeOfList].confirmation.mainBtn
          }
          alert={expandPanel ? false : true}
          handleClick={
            typeOfList !== "confirmation"
              ? () => setExpandPanel(!expandPanel)
              : handleClick
          }
          text={
            expandPanel
              ? messages[typeOfList].confirmation.alt
              : messages[typeOfList].confirmation.main
          }
        />
      ) : null}

      {typeOfList === "search" ? (
        <Button
          secondary={expandPanel}
          text={!expandPanel ? "Book flight" : "Nevermind"}
          handleClick={() => setExpandPanel(!expandPanel)}
        />
      ) : null}

      {typeOfList === "reservation" ? (
        <Button
          secondary={!expandPanel}
          text={!expandPanel ? "Cancel Reservation" : "Nevermind"}
          handleClick={() => setExpandPanel(!expandPanel)}
        />
      ) : null}
    </CardContainer>
  );
};

export default Card;
