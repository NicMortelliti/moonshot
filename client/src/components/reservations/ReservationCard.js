import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { formatDate } from "../../helpers/helpers";
import { deleteReservation } from "../../features/reservations/reservationSlice";

// Styled components
import { Flex } from "../styles/Flex.styled";
import { Button } from "../styles/Button.styled";
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

  return (
    <StyledReservationCard>
      <p>
        {formatDate(departure)} - {formatDate(arrival)}
      </p>
      <div>
        <p>
          {origin.name}, {origin.macro_place} ({origin.icao})
        </p>
      </div>
      <div>
        <p>
          {destination.name}, {destination.macro_place} ({destination.icao})
        </p>
      </div>
      {/* <button name="change" onClick={(e) => modifyReservation(e)}>
          Change reservation
        </button> */}
      <Button name="cancel" onClick={(e) => modifyReservation(e)}>
        Cancel reservation
      </Button>
      <Button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "Show details"}
      </Button>
      {showDetails ? (
        <section>
          <div>
            <h3>Flight #</h3>
            <p>{flightId}</p>
          </div>
          <div>
            <h3>Spacecraft</h3>
            <p>
              {vehicle.make} {vehicle.model} "{vehicle.name}"
            </p>
            <p>Total passenger seats: {vehicle.pax_capacity}</p>
          </div>
        </section>
      ) : null}
    </StyledReservationCard>
  );
};

export default ReservationCard;
