import React from "react";
import Moment from "react-moment";

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

  // Format date
  const formatDate = (date) => (
    <Moment format="ddd MMM DD, YYYY">{new Date(date)}</Moment>
  );

  return (
    <div style={{ border: "1px solid red" }}>
      <p>
        {formatDate(data.flight.departure)} - {formatDate(data.flight.arrival)}
      </p>
      <div>
        <p>Flight {data.flight.id}</p>
      </div>
      <div>
        <p>
          {data.origin.name}, {data.origin.macro_place}({data.origin.icao})
        </p>
      </div>
      <div>
        <p>
          {data.destination.name}, {data.destination.macro_place} (
          {data.destination.icao})
        </p>
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
