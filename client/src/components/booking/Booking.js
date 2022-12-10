import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookFlight } from "../../features/booking/bookingSlice";

// Components
import { default as Location } from "./BookingLocationButton";
import { default as Flight } from "./BookingFlightButton";
import { default as Confirmation } from "./BookingConfirmation";
import { getOrigins } from "../../features/booking/bookingSlice";

// Styled Components
import { Button } from "../styles/Button.styled";

const Booking = () => {
  const [isConfirmationDisplayed, setIsConfirmationDisplayed] = useState(false);
  const [flightIdSelected, setFlightIdSelected] = useState(null);

  const dispatch = useDispatch();

  // Get reservations from API when component loads
  useEffect(() => {
    dispatch(getOrigins());
  }, []);

  // Destructure props
  const { id: userId } = useSelector((state) => state.auth);
  const { flight, origin, destination, data } = useSelector(
    (state) => state.booking
  );

  // This function determines where we're at in terms of
  // booking workflow. If 'origin' is yet to be set
  // the switch method stops at case 'origin' and
  // retrieves a list of origins from the backend.
  // The same logic applies to the 'destination' and
  // 'flight' parts of the booking workflow.
  const determineWhatToRender = () => {
    switch (null) {
      case origin:
        return data.map((eachData) => (
          <Location key={eachData.id} data={eachData} />
        ));
      case destination:
        return data.map((eachData) => (
          <Location key={eachData.id} data={eachData} />
        ));
      case flight:
        return data.map((eachData) => (
          <Flight
            key={eachData.id}
            data={eachData}
            setIsConfirmationDisplayed={setIsConfirmationDisplayed}
            setFlightIdSelected={setFlightIdSelected}
          />
        ));
      default:
        break;
    }
  };

  // Clear local states for confirmation dialog
  const clearLocalDialogStates = () => {
    setIsConfirmationDisplayed(false);
    setFlightIdSelected(null);
  };

  // Send booking request to API
  const sendBooking = () => {
    dispatch(bookFlight({ userId, flightId: flightIdSelected }));
    clearLocalDialogStates();
  };

  const RenderConfirmationDialog = () => {
    if (!isConfirmationDisplayed) {
      return null;
    } else {
      return (
        <div>
          <p>{`Are you sure you want to book flight ${flightIdSelected}?`}</p>
          <Button onClick={() => sendBooking()}>Confirm</Button>
          <Button onClick={() => clearLocalDialogStates()}>Cancel</Button>
        </div>
      );
    }
  };

  return (
    <>
      <h1>BOOKING COMPONENT</h1>
      <RenderConfirmationDialog />
      {data ? determineWhatToRender() : null}
      {flight ? <Confirmation data={flight} /> : null}
    </>
  );
};
export default Booking;
