import React from "react";
import { formatDate } from "../../../helpers/helpers";

// Styled components
import { CardFromTo as FromTo } from "../../styles/Card.styled";
import { HorizontalRule } from "../../styles/Widgets.styled";
import { H5 } from "../../styles/Text.styled";

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
        <H5 light>
          {originName}, {originMacroName}
        </H5>
        <H5 light>
          {destinationName}, {destinationMacroName}
        </H5>
      </FromTo>
      <HorizontalRule />
      <FromTo>
        <H5 light>{formatDate(departure)}</H5>
        <H5 light>{formatDate(arrival)}</H5>
      </FromTo>
    </div>
  );
};

export default OriginDestinationGraphic;
