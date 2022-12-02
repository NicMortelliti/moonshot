import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import { default as Location } from "./BookingLocationButton";
import { default as Flight } from "./BookingFlightButton";
import { default as Confirmation } from "./BookingConfirmation";
import { getOrigins } from "../../features/booking/bookingSlice";

const Booking = () => {
  // Grab properties from booking state
  const { flight, origin, destination, data } = useSelector(
    (state) => state.booking
  );

  const dispatch = useDispatch();

  // When component first loads, get origins from API as long as origin
  // is not yet set
  useEffect(() => {
    if (!origin) {
      dispatch(getOrigins());
    }
  }, []);

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
      {data ? (
        determineWhatToRender() // Render booking selection buttons
      ) : flight ? (
        <Confirmation data={flight} /> // Render booking confirmation
      ) : null}
    </>
  );
};
export default Booking;
