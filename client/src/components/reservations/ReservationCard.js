import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { capitalize, shortFormatDate } from "../../helpers/helpers";
import { deleteReservation } from "../../features/reservations/reservationSlice";
import { FaSpaceShuttle } from "react-icons/fa";

// Styled components
import { Flex } from "../styles/Flex.styled";
import { Button, MinimalButton } from "../styles/Button.styled";
import { StyledReservationCard } from "../styles/Card.styled";
import { HR } from "../styles/Widgets.styled";

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
            onClick={() => modifyReservation()}>
            Confirm cancellation
          </MinimalButton>
        </Flex>
      </>
    );
  };

  // Basic information about the reservation
  const PrimaryData = () => {
    return (
      <>
        <Flex align="flex-start">
          <Flex direction="column" align="flex-start">
            <h5>From</h5>
            <h1>{origin.name}</h1>
            <h2>{origin.macro_place}</h2>
            <h5>{shortFormatDate(departure)}</h5>
          </Flex>
          <Flex direction="column" justify="flex-start">
            <h5>Flight</h5>
            <h2>{flightId}</h2>
            <FaSpaceShuttle />
          </Flex>
          <Flex direction="column" align="flex-end">
            <h5>To</h5>
            <h1>{destination.name}</h1>
            <h2>{destination.macro_place}</h2>
            <h5>{shortFormatDate(arrival)}</h5>
          </Flex>
        </Flex>
        <Flex>
          <HR margin="20px 0" />
        </Flex>
        <Flex>
          <Flex justify="flex-start" gap="0 10px">
            <h5>Passenger:</h5>
            <h4>
              {capitalize(firstName)} {capitalize(lastName)}
            </h4>
          </Flex>
        </Flex>
        <Flex align="flex-end">
          <Flex justify="flex-start" gap="0 10px">
            <h5>Spacecraft:</h5>
            <h4>
              {vehicle.make} {vehicle.model} "{vehicle.name}"
            </h4>
          </Flex>
          <Flex justify="flex-end">
            <MinimalButton
              name="cancel"
              onClick={() => setShowConfirmation(true)}>
              Cancel reservation
            </MinimalButton>
          </Flex>
        </Flex>
      </>
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
    <StyledReservationCard>
      <RenderCard />
    </StyledReservationCard>
  );
};

export default ReservationCard;
