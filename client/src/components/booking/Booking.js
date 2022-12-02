import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

// Components
import { default as Location } from "./BookingLocationButton";
import { default as Flight } from "./BookingFlightButton";
import { default as Confirmation } from "./BookingConfirmation";

const Booking = () => {
  // Grab properties from reservation state
  const { flight, origin, destination, data } = useSelector(
    (state) => state.booking
  );

  const determineWhatToRender = () => {
    console.log(data, flight, origin, destination);
    switch (null) {
      case origin:
        data.map((eachData) => <Location key={eachData.id} data={eachData} />);
        break;
      case destination:
        data.map((eachData) => <Flight key={eachData.id} data={eachData} />);
        break;
      case flight:
        <Routes>
          <Route path="confirmation" element={<Confirmation data={flight} />} />
        </Routes>;
        break;

      default:
        break;
    }
  };

  return <>{data ? determineWhatToRender() : null}</>;
};
export default Booking;
