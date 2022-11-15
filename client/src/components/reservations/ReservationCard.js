import React from "react";

function ReservationCard({ data }) {
  return (
    <div key={data.id} style={{ border: "1px solid red" }}>
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
      <button>Change reservation</button>
      <button>Cancel trip</button>
      <h3>Confirmation:</h3>
      <button>Trip details</button>
    </div>
  );
}

export default ReservationCard;
