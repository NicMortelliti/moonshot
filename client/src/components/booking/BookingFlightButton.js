import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookFlight } from "../../features/booking/bookingSlice";
import { confirmDialog } from "../../features/dialogs/dialogSlice";
import { formatDate } from "../../helpers/helpers";

const BookingFlightButton = ({ data }) => {
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

  const dispatch = useDispatch();
  const { id: userId } = useSelector((state) => state.auth);

  // Send booking request to API
  const sendBooking = () => {
    dispatch(bookFlight({ userId, flightId }));
  };

  // If flights remaining seats are below 'n' display seats remaining
  const seats = (seatsRemaining) => {
    switch (true) {
      case seatsRemaining <= 6:
        return <p>{`Only ${seatsRemaining} seats remaining!`}</p>;

      default:
        return null;
    }
  };

  const messages = [{ message: "Are you sure you want to book this flight?" }];
  const buttons = [{ button: "Confirm" }, { button: "Cancel" }];

  return (
    <div>
      <button onClick={() => dispatch(confirmDialog({ messages, buttons }))}>
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
