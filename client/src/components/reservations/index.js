import React, { useState } from "react";
import ReservationCancel from "./ReservationCancel";
import ReservationChange from "./ReservationChange";

// Components
import ReservationsList from "./ReservationsList";

export function ReservationBox() {
  const [selectedReservation, setSelectedReservation] = useState();
  const [apiResults, setApiResults] = useState("");
  const [displayCancelConfirmation, setDisplayCancelConfirmation] =
    useState(false);

  const handleReservationClick = (e, data) => {
    e.preventDefault();
    setSelectedReservation(data);
  };

  return (
    <div>
      {displayCancelConfirmation ? (
        <ReservationCancel
          data={selectedReservation}
          reservationsList={apiResults}
          reservationsListSetter={setApiResults}
          displayedSetter={setDisplayCancelConfirmation}
        />
      ) : null}
      {selectedReservation ? (
        <ReservationChange data={selectedReservation} />
      ) : (
        <ReservationsList
          reservationSetter={handleReservationClick}
          reservationsList={apiResults}
          reservationsListSetter={setApiResults}
          reservationCancelSetter={setDisplayCancelConfirmation}
        />
      )}
    </div>
  );
}
