import React from "react";
import { useSelector } from "react-redux";

// Components
import { default as Location } from "./BookingLocationButton";

const Booking = () => {
  // Grab properties from reservation state
  const { data } = useSelector((state) => state.booking);

  return (
    <>
      {data
        ? data.map((eachData) => <Location key={eachData.id} data={eachData} />)
        : null}
    </>
  );
};
export default Booking;
