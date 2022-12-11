import React from "react";
import { formatDate } from "../../helpers/helpers";
import { FaSpaceShuttle } from "react-icons/fa";

// Styled Components
import { Flex } from "../styles/Flex.styled";
import { FlightContainer, SeatsContainer, HR } from "../styles/Search.styled";
import { Button } from "../styles/Button.styled";

const BookingFlightButton = ({
  data,
  setIsConfirmationDisplayed,
  setFlightIdSelected,
}) => {
  // Destructure props
  const {
    id: flightId,
    departure,
    arrival,
    origin: { name: originName, macro_place: originMacroName },
    destination: { name: destinationName, macro_place: destinationMacroName },
    vehicle: { make: vehicleMake, model: vehicleModel, name: vehicleName },
    reservations_remaining,
  } = data;

  // If flights remaining seats are below 'n' display seats remaining
  const seats = (seatsRemaining) => {
    if (seatsRemaining <= 6) {
      return (
        <SeatsContainer>
          <p>{`Only ${seatsRemaining} seats remaining!`}</p>
        </SeatsContainer>
      );
    } else {
      return null;
    }
  };

  const confirmSelection = () => {
    setFlightIdSelected(flightId);
    setIsConfirmationDisplayed(true);
  };

  return (
    <Flex>
      <FlightContainer direction="column" align="flex-end" padding="20px">
        {/* Seats Remaining */}
        {seats(reservations_remaining)}

        {/* Flight # and Vehicle */}
        <Flex>
          <h3>Flight {flightId}</h3>
        </Flex>
        <Flex>
          <Flex direction="column">
            <p>
              {vehicleMake} {vehicleModel} - "{vehicleName}"
            </p>
          </Flex>
        </Flex>

        <HR>
          <span />
          <hr />
          <FaSpaceShuttle />
          <span />
        </HR>

        {/* Details */}
        <Flex>
          {/* Origin */}
          <Flex justify="flex-start" align="flex-start" direction="column">
            <h4>{formatDate(departure)}</h4>
            <p>
              {originName}, {originMacroName}
            </p>
          </Flex>

          {/* Destination */}
          <Flex justify="flex-start" align="flex-end" direction="column">
            <h4>{formatDate(arrival)}</h4>
            <p>
              {destinationName}, {destinationMacroName}
            </p>
          </Flex>
        </Flex>
        <Flex>
          <Button onClick={() => confirmSelection()}>Book</Button>
        </Flex>
      </FlightContainer>
    </Flex>
  );
};

export default BookingFlightButton;
