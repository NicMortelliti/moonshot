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

        {/* Locations */}
        <Flex justify="space-between">
          <h5>
            {originName}, {originMacroName}
          </h5>
          <h5>
            {destinationName}, {destinationMacroName}
          </h5>
        </Flex>

        {/* Horizontal rule */}
        <HR>
          <span />
          <hr />
          <FaSpaceShuttle />
          <span />
        </HR>

        {/* Dates */}
        <Flex justify="space-between">
          <h5>{formatDate(departure)}</h5>
          <h5>{formatDate(arrival)}</h5>
        </Flex>

        {/* Button */}
        <Flex>
          <Button onClick={() => confirmSelection()}>Book</Button>
        </Flex>
      </FlightContainer>
    </Flex>
  );
};

export default BookingFlightButton;
