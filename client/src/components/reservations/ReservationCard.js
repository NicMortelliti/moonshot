import React from "react";

function ReservationCard({
  data,
  setter,
  reservationCancelSetter,
  reservationChangeSetter,
}) {
  // Display cancel confirmation and complete
  // cancellation if confirmed
  const modifyReservation = (e) => {
    setter(e, data);

    switch (e.target.name) {
      case "cancel":
        reservationCancelSetter(true);
        return null;
      case "change":
        reservationChangeSetter(true);
        return null;
      default:
        return null;
    }
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
      <button name="change" onClick={(e) => modifyReservation(e)}>
        Change reservation
      </button>
      <button name="cancel" onClick={(e) => modifyReservation(e)}>
        Cancel reservation
      </button>
      <h3>Confirmation:</h3>
      <button>Trip details</button>
    </div>
  );
}

export default ReservationCard;
