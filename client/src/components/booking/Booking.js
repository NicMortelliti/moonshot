import React from "react";
import { useSelector } from "react-redux";

// Components
import { default as Location } from "./BookingLocationButton";
import { default as Flight } from "./BookingFlightButton";
import { default as Confirmation } from "./BookingConfirmation";

const Booking = () => {
  // Grab properties from reservation state
  const { data, destination, flight } = useSelector((state) => state.booking);

  return (
    <>
      {data && !destination ? (
        data.map((eachData) => <Location key={eachData.id} data={eachData} />)
      ) : data && destination ? (
        data.map((eachData) => <Flight key={eachData.id} data={eachData} />)
      ) : flight ? (
        <Confirmation data={flight} />
      ) : null}
    </>
  );
};
export default Booking;
