import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReservation } from "../../features/reservations/reservationSlice";
import { formatDate } from "../../helpers/helpers";
import {
  ConfirmationNo,
  FlightGrid,
  Carrier,
  Origin,
  Departure,
  Destination,
  Arrival,
  Action,
  DepartureYear,
  ArrivalYear,
  Slot,
  Confirm,
  Vehicle,
} from "../styles/Search.styled";

// * Main
const ReservationCard = ({ data }) => {
  const [expandPanel, setExpandPanel] = useState(false);

  const dispatch = useDispatch();

  // Click handlers
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deleteReservation(data.id));
  };

  return (
    <FlightGrid>
      <ConfirmationNo>Confirmation: {data.id}</ConfirmationNo>
      <Vehicle>
        Spacecraft: {data.vehicle.make} {data.vehicle.model} "
        {data.vehicle.name}"
      </Vehicle>
      <Carrier>MoonShot flight: {data.flight.id}</Carrier>
      <Origin>
        {data.origin.name}, {data.origin.macro_place}
      </Origin>
      <DepartureYear>{formatDate(data.flight.departure, "year")}</DepartureYear>
      <Departure>{formatDate(data.flight.departure, "monthDay")}</Departure>
      <Destination>
        {data.destination.name}, {data.destination.macro_place}
      </Destination>
      <ArrivalYear>{formatDate(data.flight.arrival, "year")}</ArrivalYear>
      <Arrival>{formatDate(data.flight.arrival, "monthDay")}</Arrival>
      <Slot />
      <Action onClick={() => setExpandPanel(!expandPanel)} alt={!expandPanel}>
        <p>{!expandPanel ? "Cancel" : "Nevermind"}</p>
      </Action>

      {/* Expanded confirmation panel */}
      {expandPanel ? (
        <Confirm alt>
          <p>Cancel your reservation on flight {data.id}?</p>
          <button onClick={handleClick}>Yes, cancel it</button>
        </Confirm>
      ) : null}
    </FlightGrid>
  );
};

export default ReservationCard;
