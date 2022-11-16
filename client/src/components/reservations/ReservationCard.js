import React, { useState } from "react";
import ReservationCancel from "./ReservationCancel";

function ReservationCard({
  data,
  setter,
  reservationsList,
  reservationsListSetter,
}) {
  // Display cancel confirmation and complete
  // cancellation if confirmed
  const cancelReservation = () => {
    setConfirmationDisplayed(true);
    console.log("Displaying confirmation");
    return (
      <ReservationCancel
        data={data}
        reservationsList={reservationsList}
        reservationsListSetter={reservationsListSetter}
        displayed={confirmationDisplayed}
        displayedSetter={setConfirmationDisplayed}
      />
    );
  };

  return (
    <div style={{ border: "1px solid red" }}>
      <p>
        {data.flight.departure} - {data.flight.arrival}
      </p>
      <p>Flight {data.flight.id}</p>
      <div>
        <h3>
          {data.origin.name}, {data.origin.macro_place}
        </h3>
        <h5>{data.origin.icao}</h5>
      </div>
      <div>
        <h3>
          {data.destination.name}, {data.destination.macro_place}
        </h3>
        <h5>{data.destination.icao}</h5>
      </div>
      <button onClick={(e) => setter(e, data)}>Change reservation</button>
      <button onClick={() => cancelReservation()}>Cancel reservation</button>
      <h3>Confirmation:</h3>
      <button>Trip details</button>
    </div>
  );
}

export default ReservationCard;
