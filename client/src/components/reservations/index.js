import React, { useEffect, useState } from "react";

// Components
import ReservationsList from "./ReservationsList";
import ReservationCancel from "./ReservationCancel";
import ReservationChange from "./ReservationChange";

export function ReservationBox() {
  const [selectedReservation, setSelectedReservation] = useState();
  const [errors, setErrors] = useState([]);
  const [reservationsList, setReservationsList] = useState([]);
  const [displayCancelConfirmation, setDisplayCancelConfirmation] =
    useState(false);
  const [displayChangePage, setDisplayChangePage] = useState(false);

  // Fetch users reservations
  useEffect(() => {
    setErrors([]);
    fetch("/reservations").then((r) => {
      if (r.ok) {
        r.json().then((results) => setReservationsList(results));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }, []);

  // Set currently selected reservation
  const handleReservationClick = (e, data) => {
    e.preventDefault();
    setSelectedReservation(data);
  };

  // Display cancel confirmation component
  const RenderCancelConfirmation = () =>
    displayCancelConfirmation ? (
      <ReservationCancel
        data={selectedReservation}
        dataSetter={setSelectedReservation}
        reservationsList={reservationsList}
        reservationsListSetter={setReservationsList}
        displayedSetter={setDisplayCancelConfirmation}
        setErrors={setErrors}
      />
    ) : null;

  // Display reservation change component
  const RenderReservationChange = () =>
    displayChangePage ? <ReservationChange data={selectedReservation} /> : null;

  // Display reservations list component
  const RenderReservationsList = () =>
    reservationsList ? (
      <ReservationsList
        reservationSetter={handleReservationClick}
        reservationsList={reservationsList}
        reservationCancelSetter={setDisplayCancelConfirmation}
        reservationChangeSetter={setDisplayChangePage}
      />
    ) : null;

  // Render messages for user
  const RenderErrors = () => errors.map((each) => <p key={each}>{each}</p>);

  return (
    <div>
      <RenderErrors />
      <RenderCancelConfirmation />
      <RenderReservationChange />
      <RenderReservationsList />
    </div>
  );
}
