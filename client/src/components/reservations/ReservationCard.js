import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { formatDate } from "../../helpers/helpers";
import { deleteReservation } from "../../features/reservations/reservationSlice";

// Styled components
import { Flex } from "../styles/Flex.styled";
import { MinimalButton } from "../styles/Button.styled";
import { StyledReservationCard } from "../styles/Card.styled";

const ReservationCard = ({ reservation }) => {
  const [showDetails, setShowDetails] = useState(false);

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
  const modifyReservation = (e) => {
    switch (e.target.name) {
      case "cancel":
        dispatch(deleteReservation(reservationId));
        break;

      default:
        break;
    }
  };

  // Basic information about the reservation
  const PrimaryData = () => {
    return (
      <>
        <div>
          <h5>Date</h5>
          <p>
            {formatDate(departure)} - {formatDate(arrival)}
          </p>
        </div>
        <div>
          <h5>From</h5>
          <p>
            {origin.name}, {origin.macro_place} ({origin.icao})
          </p>
        </div>
        <div>
          <h5>To</h5>
          <p>
            {destination.name}, {destination.macro_place} ({destination.icao})
          </p>
        </div>
      </>
    );
  };

  // Details section of the reservation card
  const DetailData = () => {
    switch (showDetails) {
      case true:
        return (
          <>
            <div>
              <h5>Flight #</h5>
              <p>{flightId}</p>
            </div>
            <div>
              <h5>Spacecraft</h5>
              <p>
                {vehicle.make} {vehicle.model} "{vehicle.name}"
              </p>
              <p>Total passenger seats: {vehicle.pax_capacity}</p>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <StyledReservationCard>
      <PrimaryData />
      <MinimalButton name="cancel" onClick={(e) => modifyReservation(e)}>
        Cancel reservation
      </MinimalButton>
      <MinimalButton onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "Show details"}
      </MinimalButton>
      <DetailData />
    </StyledReservationCard>
  );
};

export default ReservationCard;
