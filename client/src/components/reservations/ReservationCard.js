import React, { useState } from "react";

function ReservationCard({
  data,
  setter,
  reservationsList,
  reservationsListSetter,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = () => {
    setIsLoading(true);
    fetch(`/reservations/${data.id}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setIsLoading(false);
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
    <div key={data.id} style={{ border: "1px solid red" }}>
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
      <button onClick={() => handleCancel()}>
        {isLoading ? "Loading..." : "Cancel reservation"}
      </button>
      <h3>Confirmation:</h3>
      <button>Trip details</button>
    </div>
  );
}

export default ReservationCard;
