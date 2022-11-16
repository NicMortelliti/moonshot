import React from "react";

function ReservationChange({ data }) {
  return (
    <div>
      <p>
        {data.flight.departure} - {data.flight.arrival}
      </p>
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
      <button>Submit changes</button>
      <button>Cancel changes</button>
      <h3>Confirmation:</h3>
    </div>
  );
}

export default ReservationChange;
