import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import FlightDetails from "../card/components/FlightDetails";
import OriginDestinationGraphic from "../card/components/OriginDestinationGraphic";

// Styled Components
import { Button } from "../styles/Button.styled";
import { Content } from "../styles/Layout.styled";
import { Legend } from "../styles/Widgets.styled";
import { H1, H3 } from "../styles/Text.styled";

const BookingConfirmation = ({ data }) => {
  // TODO Center the "OK!" button
  const navigate = useNavigate();

  return (
    <Content>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div style={{ width: "30em" }}>
          {/* Header section contains feedback messges to the user */}
          <div className="header">
            <H1 light>Far out!</H1>
            <H3 light>You're going to space!</H3>
            <Legend light>The following booking has been confirmed.</Legend>
          </div>

          {/* Flight details section contains the flight and confirmation numbers */}
          <div className="flight-details">
            <FlightDetails
              data={data}
              flightId={data.flight.id}
              confirmationNumber={data.id}
            />
          </div>

          {/* Origin-destination section displays the origin/destination of
        the flight along with a graphic */}
          <div className="origin-destination">
            <OriginDestinationGraphic
              origin={data.origin}
              destination={data.destination}
              departure={data.flight.departure}
              arrival={data.flight.arrival}
            />
          </div>

          {/* Action panel contains the UI for the user to confirm
        or cancel actions */}
          <div className="action-panel">
            <Button onClick={() => navigate("/my-trips")}>Ok!</Button>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default BookingConfirmation;
