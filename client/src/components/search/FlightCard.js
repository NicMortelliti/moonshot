import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookFlight } from "../../features/booking/bookingSlice";
import { formatDate } from "../../helpers/helpers";
import {
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
  Seats,
} from "../styles/Search.styled";

// * Main
const FlightCard = ({ data }) => {
  const [expandPanel, setExpandPanel] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { user: userId } = user;

  // Click handlers
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(bookFlight({ userId, data }));
  };

  return (
    <FlightGrid>
      {data.reservations_remaining < 6 ? (
        <Seats>Only {data.reservations_remaining} seats left!</Seats>
      ) : null}
      <Carrier>MoonShot {data.id}</Carrier>
      <Origin>{data.origin.icao}</Origin>
      <DepartureYear>{formatDate(data.departure, "year")}</DepartureYear>
      <Departure>{formatDate(data.departure, "monthDay")}</Departure>
      <Destination>{data.destination.icao}</Destination>
      <ArrivalYear>{formatDate(data.arrival, "year")}</ArrivalYear>
      <Arrival>{formatDate(data.arrival, "monthDay")}</Arrival>
      <Slot />
      <Action
        onClick={() => setExpandPanel(!expandPanel)}
        alt={expandPanel ? "true" : "false"}>
        <p>{!expandPanel ? "Book flight" : "Nevermind"}</p>
      </Action>

      {/* Expanded confirmation panel */}
      {expandPanel ? (
        <Confirm>
          <p>Reserve a seat on flight {data.id}?</p>
          <button onClick={handleClick}>Yes, book it!</button>
        </Confirm>
      ) : null}
    </FlightGrid>
  );
};

export default FlightCard;
