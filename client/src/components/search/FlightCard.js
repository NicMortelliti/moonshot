import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookFlight } from "../../features/booking/bookingSlice";
import ActionConfirmation from "../card/components/ActionConfirmation";
import FlightDetails from "../card/components/FlightDetails";
import OriginDestinationGraphic from "../card/components/OriginDestinationGraphic";
import { Button } from "../styles/Button.styled";
import { CardContainer } from "../styles/Card.styled";
import { Flex } from "../styles/Flex.styled";

// * Main
const FlightCard = ({ data }) => {
  const [expandPanel, setExpandPanel] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { user: userId } = user;

  if (data) {
    const origin = data.origin;
    const destination = data.destination;
    const departure = data.departure;
    const arrival = data.arrival;
    const flightId = data.id;

    // Click handlers
    const handleClick = (e) => {
      e.preventDefault();
      dispatch(bookFlight({ userId, flightId }));
    };

    return (
      <Flex column>
        <CardContainer>
          <FlightDetails data={data} flightId={flightId} />
          <OriginDestinationGraphic
            origin={origin}
            destination={destination}
            departure={departure}
            arrival={arrival}
          />

          {/* Expanded confirmation panel */}
          {expandPanel ? (
            <ActionConfirmation
              first={`Reserve a seat on flight ${flightId}?`}
              buttonText="Yes, book it!"
              handleClick={handleClick}
            />
          ) : null}

          <Button
            secondary={expandPanel}
            onClick={() => setExpandPanel(!expandPanel)}>
            {!expandPanel ? "Book flight" : "Nevermind"}
          </Button>
        </CardContainer>
      </Flex>
    );
  }
};

export default FlightCard;
