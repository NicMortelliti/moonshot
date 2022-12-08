import React from "react";
import { formatDate } from "../../helpers/helpers";

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
    <div>
      <button onClick={() => confirmSelection()}>
        <p>Flight {flightId}</p>
        <p>
          {originName}, {originMacroName}
        </p>
        <p>to</p>
        <p>
          {destinationName}, {destinationMacroName}
        </p>
        <p>{formatDate(departure)}</p>
        <p>{formatDate(arrival)}</p>
        <section>
          <p>"{vehicleName}"</p>
          <p>
            {vehicleMake} {vehicleModel}
          </p>
        </section>
        {seats(reservations_remaining)}
      </button>
    </div>
  );
};

export default BookingFlightButton;
