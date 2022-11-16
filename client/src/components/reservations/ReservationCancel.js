import React, { useState } from "react";

function ReservationCancel({
  data,
  dataSetter,
  reservationsList,
  reservationsListSetter,
  displayedSetter,
  setErrors,
}) {
  const [isLoading, setIsLoading] = useState(false);

  // Send destroy verb to reservation ID on backend
  const handleCancel = () => {
    setIsLoading(true);
    fetch(`/reservations/${data.id}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setIsLoading(false);
        setErrors(["Successfully cancelled reservation"]);
        removeFromReservationsList();
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  // Remove deleted reservation from reservations list
  const removeFromReservationsList = () => {
    let newList = [];
    reservationsList.map((each) =>
      each.id !== data.id ? newList.push(each) : null
    );

    reservationsListSetter(newList);
    displayedSetter(false);
  };

  return (
    <div>
      <h2>Are you sure you want to cancel this reservation?</h2>
      <button onClick={() => handleCancel()}>
        {isLoading
          ? "Loading..."
          : "Yes (This will permanently cancel your reservation)"}
      </button>
      <button onClick={() => displayedSetter(false)}>No</button>
    </div>
  );
}

export default ReservationCancel;
