import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

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
        determineWhatToRender()
      ) : flight ? (
        <Routes>
          <Route
            path="/flight-search/confirmation"
            element={<Confirmation data={flight} />}
          />
        </Routes>
      ) : null}
    </>
  );
};
export default Booking;
