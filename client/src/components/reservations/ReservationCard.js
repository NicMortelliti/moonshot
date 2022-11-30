import React, { useState } from "react";
import Moment from "react-moment";

const ReservationCard = ({ reservation }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Destructure props
  const {
    flight: { id, departure, arrival },
    origin,
    destination,
    vehicle,
  } = reservation;

  // Format date
  const formatDate = (date) => (
    <Moment format="ddd MMM DD, YYYY">{new Date(date)}</Moment>
  );

  return (
    <div>
      <div style={{ border: "1px solid red" }}>
        <p>
          {formatDate(departure)} - {formatDate(arrival)}
        </p>
        <div>
          <p>
            {origin.name}, {origin.macro_place}({origin.icao})
          </p>
        </div>
        <div>
          <p>
            {destination.name}, {destination.macro_place} ({destination.icao})
          </p>
        </div>
        {/* <button name="change" onClick={(e) => modifyReservation(e)}>
          Change reservation
        </button>
        <button name="cancel" onClick={(e) => modifyReservation(e)}>
          Cancel reservation
        </button> */}
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide details" : "Show details"}
        </button>
        {showDetails ? (
          <section>
            <div>
              <h3>Flight #</h3>
              <p>{id}</p>
            </div>
            <div>
              <h3>Spacecraft</h3>
              <p>
                {vehicle.make} {vehicle.model} "{vehicle.name}"
              </p>
              <p>Total passenger seats: {vehicle.pax_capacity}</p>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default ReservationCard;
