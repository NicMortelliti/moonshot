import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { capitalize, shortFormatDate } from "../../helpers/helpers";
import { deleteReservation } from "../../features/reservations/reservationSlice";

// Styled components
import { Flex } from "../styles/Flex.styled";
import { Button, MinimalButton } from "../styles/Button.styled";
import {
  HorizontalRule,
  Legend,
  LocationBlock,
} from "../styles/Widgets.styled";

const ReservationCard = ({ reservation }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Redux
  const {
    user: { first_name: firstName, last_name: lastName },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // Destructure props
  const {
    id: reservationId,
    flight: { id: flightId, departure, arrival },
    origin,
    destination,
    vehicle,
  } = reservation;

  // Modify/Cancel reservation
  const modifyReservation = () => {
    dispatch(deleteReservation(reservationId));
  };

  // Confirmation
  const Confirmation = () => {
    return (
      <div>
        <h4>
          Are you sure you want to cancel your reservation on flight {flightId}?
        </h4>
        <p>This cannot be undone!</p>
        <Button margin="20px 0 0" onClick={() => setShowConfirmation(false)}>
          Back
        </Button>
        <MinimalButton
          alert
          margin="20px 0 10px"
          onClick={() => modifyReservation()}>
          Confirm cancellation
        </MinimalButton>
      </div>
    );
  };

  // Basic information about the reservation
  const PrimaryData = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          flex: "1 1 100%",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "stretch",
            alignItems: "stretch",
            flex: "1 1 100%",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flex: "1 1 100%",
            }}>
            <LocationBlock
              align="start"
              name={origin.name}
              macroName={origin.macro_place}
            />
            <LocationBlock
              align="end"
              name={destination.name}
              macroName={destination.macro_place}
            />
          </div>
        </div>
        <div>
          <Flex direction="column" align="flex-start">
            <Legend>From</Legend>
            <h1>{origin.name}</h1>
            <h2>{origin.macro_place}</h2>
            <Legend>{shortFormatDate(departure)}</Legend>
          </Flex>
          <Flex direction="column" justify="flex-start">
            <Legend>Flight</Legend>
            <h2>{flightId}</h2>
          </Flex>
          <Flex direction="column" align="flex-end">
            <Legend>To</Legend>
            <h1 align="end">{destination.name}</h1>
            <h2>{destination.macro_place}</h2>
            <Legend>{shortFormatDate(arrival)}</Legend>
          </Flex>
        </div>
        <Flex>
          <HorizontalRule />
        </Flex>

        {/* Bottom half of card is rendered here */}
        <Flex align="flex-end" justify="flex-end">
          {/* The flex=4 argument makes the content in this
          flex container take up more width than the content
          on the right side of this card. */}
          <Flex direction="column" flex="4">
            <Flex>
              <Flex align="flex-start" direction="column">
                <Legend>Passenger:</Legend>
                <h4>
                  {capitalize(firstName)} {capitalize(lastName)}
                </h4>
              </Flex>
            </Flex>
            <Flex align="flex-start" direction="column">
              <Legend margin="1rem 0 0">Spacecraft:</Legend>
              <h4>
                {vehicle.make} {vehicle.model} "{vehicle.name}"
              </h4>
            </Flex>
          </Flex>

          {/* The flex=1 argument makes the cancel reservation
          button smaller in width than the content on the left
          side of the card. */}
          <Flex flex="1">
            <MinimalButton
              name="cancel"
              textAlign="end"
              onClick={() => setShowConfirmation(true)}>
              Cancel reservation
            </MinimalButton>
          </Flex>
        </Flex>
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
      }}>
      <RenderCard />
    </div>
  );
};

export default ReservationCard;
