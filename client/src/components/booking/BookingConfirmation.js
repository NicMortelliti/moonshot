import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset, bookFlight } from "../../features/booking/bookingSlice";

import { deleteReservation } from "../../features/reservations/reservationSlice";

// Styled Components
import { Button, MinimalButton } from "../styles/Button.styled";
import {
  CenteredTextRow,
  HorizontalRule,
  Legend,
} from "../styles/Widgets.styled";
import { Flex } from "../styles/Flex.styled";

// Helpers
import { capitalize, formatDate } from "../../helpers/helpers";

const BookingConfirmation = ({ data, newReservation = false }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Destructure props
  const {
    id: confirmationNumber,
    flight: { id: flightId, departure, arrival },
    origin: { name: originName, macro_place: originMacroName },
    destination: { name: destinationName, macro_place: destinationMacroName },
    vehicle: { make: vehicleMake, model: vehicleModel, name: vehicleName },
  } = data;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    id: userId,
    user: { first_name: firstName, last_name: lastName },
  } = useSelector((state) => state.auth);

  // Close confirmation window and clear out booking store
  const closeConfirmation = () => {
    dispatch(reset());
    navigate("/my-trips");
  };

  // Confirmation
  const Confirmation = () => {
    return (
      <>
        <Flex direction="column">
          <Flex direction="column">
            <h4>
              Are you sure you want to cancel your reservation on flight{" "}
              {flightId}?
            </h4>
            <p>This cannot be undone!</p>
          </Flex>
          <Button margin="20px 0 0" onClick={() => setShowConfirmation(false)}>
            Back
          </Button>
          <MinimalButton
            alert
            margin="20px 0 10px"
            onClick={() => dispatch(deleteReservation(confirmationNumber))}>
            Confirm cancellation
          </MinimalButton>
        </Flex>
      </>
    );
  };

  const PrimaryData = () => {
    return (
      <div
        style={{
          display: "flex",
          margin: "20px 0",
          placeContent: "stretch center",
          alignItems: "center",
          flexBasis: "100%",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
            flexBasis: "90%",
            maxWidth: "800px",
          }}>
          {/* Top */}
          {newReservation ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <h1>Far out!</h1>
              <h3>You're going to space!</h3>
            </div>
          ) : null}

          {/* Middle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "stretch",
              textAlign: "center",
            }}>
            <Legend>The following booking has been confirmed.</Legend>

            {/* Details */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "stretch",
              }}>
              <CenteredTextRow
                lgd="Confirmation number"
                readout={confirmationNumber}
              />
              <CenteredTextRow
                lgd="Passenger"
                readout={`${capitalize(firstName)} ${capitalize(lastName)}`}
              />
              <CenteredTextRow lgd="Flight" readout={flightId} />
              <CenteredTextRow
                lgd="Spacecraft"
                readout={`${vehicleMake} ${vehicleModel} - "${vehicleName}"`}
              />
            </div>
          </div>

          {/* Locations */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "2em",
            }}>
            <h5>
              {originName}, {originMacroName}
            </h5>
            <h5>
              {destinationName}, {destinationMacroName}
            </h5>
          </div>

          {/* Horizontal Rule widget */}
          <div>
            <HorizontalRule />
          </div>

          {/* Dates */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "2em",
            }}>
            <h5>{formatDate(departure)}</h5>
            <h5>{formatDate(arrival)}</h5>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            {newReservation ? (
              <div>
                <Button onClick={() => closeConfirmation()}>ok!</Button>
              </div>
            ) : (
              <Flex flex="1">
                <MinimalButton
                  name="cancel"
                  textAlign="end"
                  onClick={() => setShowConfirmation(true)}>
                  Cancel reservation
                </MinimalButton>
              </Flex>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Determine what to display on the card.
  // If showConfirmation is false:
  //    -> Display the reservation information
  // If showConfirmation is true:
  //    -> Display the confirmation dialog
  const RenderCard = () => {
    switch (showConfirmation) {
      case true:
        return <Confirmation />;

      default:
        return <PrimaryData />;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        // margin: "40px",
      }}>
      <RenderCard />
    </div>
  );
};

export default BookingConfirmation;
