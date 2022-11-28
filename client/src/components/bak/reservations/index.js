import React, { useEffect, useState } from "react";

// Components
import ReservationCard from "./ReservationCard";
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
    displayChangePage ? (
      <ReservationChange
        data={selectedReservation}
        setDisplayChangePage={setDisplayChangePage}
      />
    ) : null;

  // Display reservations list component
  const RenderReservationsList = () =>
    reservationsList.length > 0 ? (
      reservationsList.map((each) => (
        <ReservationCard
          key={each.id}
          data={each}
          setter={handleReservationClick}
          reservationsList={reservationsList}
          reservationsListSetter={setReservationsList}
          reservationCancelSetter={setDisplayCancelConfirmation}
          reservationChangeSetter={setDisplayChangePage}
        />
      ))
    ) : (
      <h1>You have no reservations</h1>
    );

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
