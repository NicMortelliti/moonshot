import React, { useState } from "react";
import styled from "styled-components";
import { default as Secondary } from "./CardSecondary";
import { default as Primary } from "./CardPrimary";
import FeedbackMessage from "./components/FeedbackMessage";
import FlightDetails from "./components/FlightDetails";
import OriginDestinationGraphic from "./components/OriginDestinationGraphic";

// This is the main container. It is where all data
// will reside. The cards background color, dimensions
// and layout are set here.
const MainContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Card = ({ data }) => {
  const [expandPanel, setExpandPanel] = useState(true);

  // ------------------------------------
  // ------------------------------------
  //
  // Main
  //
  // ------------------------------------
  // ------------------------------------
  return (
    <MainContainer>
      <FeedbackMessage
        first="Far out!"
        second="You're going to space!"
        third="The following booking has been confirmed."
      />
      <FlightDetails data={data} />
      <OriginDestinationGraphic data={data} />
      <Primary setExpand={setExpandPanel} expand={expandPanel} />
      <Secondary expand={expandPanel} />
    </MainContainer>
  );
};

export default Card;
