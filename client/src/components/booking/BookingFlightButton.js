import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookFlight } from "../../features/booking/bookingSlice";
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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: userId } = useSelector((state) => state.auth);

  // Send booking request to API
  const sendBooking = () => {
    dispatch(bookFlight({ userId, flightId }));
    navigate("confirmation");
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

  return (
    <button onClick={() => sendBooking()}>
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
  );
};

export default BookingFlightButton;
