import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookFlight } from "../../features/booking/bookingSlice";
import { confirmDialog, reset } from "../../features/dialogs/dialogSlice";
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
    if (seatsRemaining <= 6) {
      return <p>{`Only ${seatsRemaining} seats remaining!`}</p>;
    } else {
      return null;
    }
  };

  const RenderConfirmationDialog = () => {
    const messages = [
      { message: "Are you sure you want to book this flight?" },
    ];
    const buttons = [
      {
        button: "Confirm",
        // actionOnClick: () => dispatch(bookFlight({ userId, flightId })),
        actionOnClick: () => console.log("it worked"),
      },
      { button: "Cancel" },
    ];

    // Send messages and buttons to the dialog reducer
    dispatch(confirmDialog({ messages, buttons }));

    // TODO Here we will act on whatever button in the dialog was clicked

    // TODO Here we will reset the dialog box
    // dispatch(reset());
  };

  return (
    <div>
      <button onClick={() => RenderConfirmationDialog()}>
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
