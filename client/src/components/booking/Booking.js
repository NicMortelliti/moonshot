import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { default as Location } from "./BookingLocationButton";
import { default as Flight } from "./BookingFlightButton";
import { default as Confirmation } from "./BookingConfirmation";
import { getOrigins } from "../../features/booking/bookingSlice";

const Booking = () => {
  const dispatch = useDispatch();

  // Get reservations from API when component loads
  useEffect(() => {
    dispatch(getOrigins());
  }, []);

  // Grab properties from booking state
  const { flight, origin, destination, data } = useSelector(
    (state) => state.booking
  );

  // This function determines where we're at in terms
  // booking workflow. If 'origin' is yet to be set
  // the switch method stops at case 'origin' and
  // retrieves a list of origins from the backend.
  // The same logic applies to the 'destination' and
  // 'flight' parts of the booking workflow.
  const determineWhatToRender = () => {
    switch (null) {
      case origin:
        console.log("Getting origins...");
        return data.map((eachData) => (
          <Location key={eachData.id} data={eachData} />
        ));
      case destination:
        console.log("Getting Destinations...");
        return data.map((eachData) => (
          <Location key={eachData.id} data={eachData} />
        ));
      case flight:
        console.log("Getting Flights...");
        return data.map((eachData) => (
          <Flight key={eachData.id} data={eachData} />
        ));
      default:
        break;
    }
  };

  return (
    <>
      {data ? determineWhatToRender() : null}
      {flight ? <Confirmation data={flight} /> : null}
    </>
  );
};
export default Booking;
