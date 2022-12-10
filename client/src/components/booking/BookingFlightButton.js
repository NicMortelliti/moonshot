import React from "react";
import { formatDate } from "../../helpers/helpers";

// Styled Components
import { Flex } from "../styles/Flex.styled";
import { FlightContainer } from "../styles/Search.styled";
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
      return <p>{`Only ${seatsRemaining} seats remaining!`}</p>;
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
      <FlightContainer>
        <div>
          <div>
            <div>
              <h2>{formatDate(departure)}</h2>
              <h4>{formatDate(arrival)}</h4>
              <p>Flight {flightId}</p>
              <p>
                {vehicleMake} {vehicleModel}
              </p>
            </div>

            <div>
              <p>
                {originName}, {originMacroName}
              </p>
              <p>to</p>
              <p>
                {destinationName}, {destinationMacroName}
              </p>

              <section>
                <p>"{vehicleName}"</p>
              </section>
              {seats(reservations_remaining)}
            </div>
          </div>
          <Button onClick={() => confirmSelection()}>Book</Button>
        </div>
      </FlightContainer>
    </Flex>
  );
};

export default BookingFlightButton;
