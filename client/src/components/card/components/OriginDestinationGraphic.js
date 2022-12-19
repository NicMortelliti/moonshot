import React from "react";
import styled from "styled-components";
import { formatDate } from "../../../helpers/helpers";

// Styled components
import { CardFromTo as FromTo } from "../../styles/Card.styled";
import { HorizontalRule } from "../../styles/Widgets.styled";

const OriginDestinationGraphic = ({
  origin,
  destination,
  departure,
  arrival,
}) => {
  // Destructure props
  const { name: originName, macro_place: originMacroName } = origin;
  const { name: destinationName, macro_place: destinationMacroName } =
    destination;

  return (
    <div>
      <FromTo>
        <h5>
          {originName}, {originMacroName}
        </h5>
        <h5>
          {destinationName}, {destinationMacroName}
        </h5>
      </FromTo>
      <HorizontalRule />
      <FromTo>
        <h5>{formatDate(departure)}</h5>
        <h5>{formatDate(arrival)}</h5>
      </FromTo>
    </div>
  );
};

export default OriginDestinationGraphic;
