import React from "react";

function ReservationCancel({
  data,
  reservationsList,
  reservationsListSetter,
  displayed,
  displayedSetter,
}) {
  const handleCancel = () => {
    fetch(`/reservations/${data.id}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        console.log(`Cancelled reservation ${data.id}`);
        removeFromReservationsList();
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
  };

  return (
    <div>
      {displayed ? (
        <div>
          <h2>Are you sure you want to cancel this reservation?</h2>
          <button onClick={() => handleCancel()}>
            Yes (This will permanently cancel your reservation)
          </button>
          <button onClick={() => displayedSetter(false)}>No</button>
        </div>
      ) : null}
    </div>
  );
}

export default ReservationCancel;
