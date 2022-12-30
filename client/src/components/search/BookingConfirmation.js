import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import FlightDetails from "../card/components/FlightDetails";
import OriginDestinationGraphic from "../card/components/OriginDestinationGraphic";

// Styled Components
import { Button } from "../styles/Button.styled";
import { CardContainer } from "../styles/Card.styled";
import { Content } from "../styles/Layout.styled";
import { Legend } from "../styles/Widgets.styled";

const BookingConfirmation = ({ data }) => {
  const navigate = useNavigate();

  const cardUI = {
    feedback: {
      line1: "Far out!",
      line2: "You're going to space!",
      line3: "The following booking has been confirmed.",
    },
    button1: <Button onClick={() => navigate("/my-trips")}>Ok!</Button>,
  };
  return (
    <Content>
      <div
        style={{
          background: "rgba(55, 55, 55, 1",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div style={{ width: "30em" }}>
          {/* Header section contains feedback messges to the user */}
          <div className="header">
            <h1>Far out!</h1>
            <h3>You're going to space!</h3>
            <Legend>The following booking has been confirmed.</Legend>
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
              departure={data.departure}
              arrival={data.arrival}
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
