import React, { useState } from "react";
import { formatDate } from "../../helpers/helpers";

// Styled Components
import {
  FlightContainer,
  SeatsContainer,
  SearchFlex,
} from "../styles/Search.styled";
import { Button } from "../styles/Button.styled";
import { HorizontalRule } from "../styles/Widgets.styled";

const BookingFlightButton = ({ data, setFlightIdSelected, sendBooking }) => {
  const [isConfirmationDisplayed, setIsConfirmationDisplayed] = useState(false);

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
  // TODO ^^^ "reservations_remaining" doesn't seem to
  // actually display seats remaining...rather, it
  // displays the max number of seats on the vehicle

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

  const ConfirmationSection = () => {
    switch (isConfirmationDisplayed) {
      case true:
        return (
          <SearchFlex direction="column">
            <p>{`Are you sure you want to book flight ${flightId}?`}</p>
            <SearchFlex align="space-between" justify="space-between">
              <Button onClick={() => sendBooking()}>Confirm</Button>
              <Button onClick={() => setIsConfirmationDisplayed(false)}>
                Cancel
              </Button>
            </SearchFlex>
          </SearchFlex>
        );

      case false:
        return <Button onClick={() => confirmSelection()}>Book</Button>;

      default:
        break;
    }
  };

  // TODO  Fix card width resizing
  // Seems to be dependent on whether
  // "n" seats remaining is displayed

  return (
    <SearchFlex>
      <FlightContainer direction="column" align="flex-end" padding="20px">
        {/* Seats Remaining */}
        {seats(reservations_remaining)}

        {/* Flight # and Vehicle */}
        <SearchFlex direction="column">
          <h3>Flight {flightId}</h3>
          <p>
            {vehicleMake} {vehicleModel} - "{vehicleName}"
          </p>
        </SearchFlex>

        {/* Locations */}
        <SearchFlex justify="space-evenly" border>
          <SearchFlex>
            <h5>
              {originName}, {originMacroName}
            </h5>
          </SearchFlex>
          <SearchFlex align="flex-start">
            <h5>
              {destinationName}, {destinationMacroName}
            </h5>
          </SearchFlex>
        </SearchFlex>

        {/* Horizontal Rule widget */}
        <HorizontalRule />

        {/* Dates */}
        <SearchFlex justify="space-between">
          <h5>{formatDate(departure)}</h5>
          <h5>{formatDate(arrival)}</h5>
        </SearchFlex>

        {/* Button */}
        <SearchFlex>
          <ConfirmationSection />
        </SearchFlex>
      </FlightContainer>
    </SearchFlex>
  );
};

export default BookingFlightButton;
