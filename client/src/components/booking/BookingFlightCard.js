import React, { useState } from "react";
import { formatDate } from "../../helpers/helpers";

// Styled Components
import { SearchFlex } from "../styles/Search.styled";
import { Button } from "../styles/Button.styled";
import { HorizontalRule } from "../styles/Widgets.styled";

const BookingFlightCard = ({ data, setFlightIdSelected, sendBooking }) => {
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
        <div
          style={{
            background: "lightcoral",
            height: "2.0em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "0.5em",
          }}>
          <p>{`Only ${seatsRemaining} seats remaining!`}</p>
        </div>
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
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
            }}>
            <p
              style={{
                margin: "1em 0",
              }}>{`Are you sure you want to book flight ${flightId}?`}</p>
            <div
              style={{
                display: "flex",
                flex: "1",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}>
              <Button onClick={() => sendBooking()}>Confirm</Button>
              <Button onClick={() => setIsConfirmationDisplayed(false)}>
                Cancel
              </Button>
            </div>
          </div>
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
    <div
      style={{
        display: "flex",
        flex: "1 100%",
        flexDirection: "column",
        maxWidth: "1100px",
        margin: "10px 0",
        color: "black",
      }}>
      <div style={{ background: "white", padding: "30px" }}>
        {/* Seats Remaining */}
        {seats(reservations_remaining)}

        {/* Flight # and Vehicle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}>
          <h3>Flight {flightId}</h3>
          <p>
            {vehicleMake} {vehicleModel} - "{vehicleName}"
          </p>
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
        <SearchFlex>
          <HorizontalRule />
        </SearchFlex>

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

        {/* Button */}
        <div>
          <ConfirmationSection />
        </div>
      </div>
    </div>
  );
};

export default BookingFlightCard;
