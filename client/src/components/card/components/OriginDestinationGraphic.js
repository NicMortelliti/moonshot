import React from "react";
import styled from "styled-components";
import { formatDate } from "../../../helpers/helpers";

// Styled components
import { HorizontalRule } from "../../styles/Widgets.styled";

const SpaceBetweenDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2em;
`;

const OriginDestinationGraphic = ({ data }) => {
  // Destructure props
  const {
    flight: { departure, arrival },
    origin: { name: originName, macro_place: originMacroName },
    destination: { name: destinationName, macro_place: destinationMacroName },
  } = data;

  // ------------------------------------
  // ------------------------------------
  //
  // Main
  //
  // ------------------------------------
  // ------------------------------------
  return (
    <div>
      <SpaceBetweenDiv>
        <h5>
          {originName}, {originMacroName}
        </h5>
        <h5>
          {destinationName}, {destinationMacroName}
        </h5>
      </SpaceBetweenDiv>
      <HorizontalRule />
      <SpaceBetweenDiv>
        <h5>{formatDate(departure)}</h5>
        <h5>{formatDate(arrival)}</h5>
      </SpaceBetweenDiv>
    </div>
  );
};

export default OriginDestinationGraphic;
