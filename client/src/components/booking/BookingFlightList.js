import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookFlight } from "../../features/booking/bookingSlice";

// Components
import { default as Flight } from "./BookingFlightCard";
import BookingConfirmation from "./BookingConfirmation";

const BookingFlightList = ({ data }) => {
  const [flightIdSelected, setFlightIdSelected] = useState(null);

  // Set up Redux dependencies
  const dispatch = useDispatch();
  const { id: userId } = useSelector((state) => state.auth);

  // Send booking request to API
  const sendBooking = () => {
    dispatch(bookFlight({ userId, flightId: flightIdSelected }));
    clearLocalDialogStates();
  };

  // Clear local states for confirmation dialog
  const clearLocalDialogStates = () => {
    setFlightIdSelected(null);
  };

  // Here we're mapping through all of the flights
  // contained within the data object.
  const RenderFlights = () => (
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "stretch",
    //     flexBasis: "90%",
    //     maxWidth: "800px",
    //     gap: "30px",
    //     border: "4px dotted aqua",
    //     placeContent: "stretch center",
    //   }}>
    <div
      style={{
        display: "flex",
        margin: "20px",
        placeContent: "stretch center",
        alignItems: "center",
        flexBasis: "100%",
      }}>
      <div
        style={{
          border: "4px dotted aqua",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
          flexBasis: "90%",
          maxWidth: "800px",
          gap: "30px",
        }}>
        {data.map((eachData) => (
          <Flight
            key={eachData.id}
            data={eachData}
            setFlightIdSelected={setFlightIdSelected}
            sendBooking={sendBooking}
          />
        ))}
      </div>
    </div>
  );

  return <RenderFlights />;
};

export default BookingFlightList;
