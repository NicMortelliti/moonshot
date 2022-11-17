import React from "react";

function ReservationDetails({ data }) {
  return (
    <div>
      <div>
        <h3>Flight #</h3>
        <p>{data.flight.id}</p>
      </div>
      <div>
        <h3>Spacecraft</h3>
        <p>
          {data.vehicle.make} {data.vehicle.model} "{data.vehicle.name}"
        </p>
        <p>Total passenger seats: {data.vehicle.pax_capacity}</p>
      </div>
    </div>
  );
}

export default ReservationDetails;
