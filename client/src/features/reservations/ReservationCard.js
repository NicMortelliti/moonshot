import React, { useState } from "react";
import Moment from "react-moment";
import ReservationDetails from "./ReservationDetails";

function ReservationCard({
  data,
  setter,
  reservationCancelSetter,
  reservationChangeSetter,
}) {
  const [showDetails, setShowDetails] = useState(false);

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

  // Display trip details
  const RenderDetails = () =>
    showDetails ? <ReservationDetails data={data} /> : null;

  return (
    <div style={{ border: "1px solid red" }}>
      <p>
        {formatDate(data.flight.departure)} - {formatDate(data.flight.arrival)}
      </p>
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
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      <RenderDetails />
    </div>
  );
}

export default ReservationCard;
