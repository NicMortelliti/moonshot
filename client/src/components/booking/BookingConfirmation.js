import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/booking/bookingSlice";

// Styled Components
import { Button } from "../styles/Button.styled";

// Helpers
import { formatDate } from "../../helpers/helpers";

const BookingConfirmation = ({ data }) => {
  // Destructure props
  const {
    id: confirmationNumber,
    flight: { id: flightId, departure, arrival },
    origin: { name: originName, macro_place: originMacroName },
    destination: { name: destinationName, macro_place: destinationMacroName },
    vehicle: { make: vehicleMake, model: vehicleModel, name: vehicleName },
  } = data;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    user: { first_name: firstName, last_name: lastName },
  } = useSelector((state) => state.auth);

  // Close confirmation window and clear out booking store
  const closeConfirmation = () => {
    dispatch(reset());
    navigate("/my-trips");
  };

  return (
    <div>
      <p>You're going to space!</p>
      <p>Far out!</p>
      <p>The following booking has been confirmed:</p>
      <p>Confirmation # {confirmationNumber}</p>
      <p>
        {firstName} {lastName} is departing on flight {flightId}
      </p>
      <p>
        from {originName}, {originMacroName} ({formatDate(departure)})
      </p>
      <p>
        arriving at {destinationName}, {destinationMacroName} (
        {formatDate(arrival)})
      </p>
      <p>
        on the beautiful {vehicleName}, a {vehicleMake} {vehicleModel}!
      </p>
      <Button onClick={() => closeConfirmation()}>ok!</Button>
    </div>
  );
};

export default BookingConfirmation;
