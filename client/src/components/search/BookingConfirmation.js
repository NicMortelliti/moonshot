import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../helpers/helpers";
import {
  ConfirmationNo,
  ConfirmationGrid,
  Carrier,
  Origin,
  Departure,
  Destination,
  Arrival,
  DepartureYear,
  ArrivalYear,
  Slot,
  Confirm,
  Vehicle,
  Message1,
  Message2,
  Message3,
} from "../styles/Search.styled";

// Styled Components
import { Legend } from "../styles/Widgets.styled";
import { H1, H3 } from "../styles/Text.styled";

const BookingConfirmation = ({ data }) => {
  const navigate = useNavigate();

  return (
    <ConfirmationGrid>
      <Message1>
        <H1>Far out!</H1>
      </Message1>
      <Message2>
        <H3>You're going to space!</H3>
      </Message2>
      <Message3>
        <Legend>The following booking has been confirmed.</Legend>
      </Message3>
      <ConfirmationNo>Confirmation: {data.id}</ConfirmationNo>
      <Vehicle>
        {data.vehicle.make} {data.vehicle.model} "{data.vehicle.name}"
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
      <Confirm>
        <button onClick={() => navigate("/my-trips")}>Ok!</button>
      </Confirm>
    </ConfirmationGrid>
  );
};

export default BookingConfirmation;
