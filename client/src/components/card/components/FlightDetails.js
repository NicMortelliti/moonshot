import React from "react";
import styled from "styled-components";
import { capitalize } from "../../../helpers/helpers";
import { useSelector } from "react-redux";

// Styled components
import { CenteredTextRow } from "../../styles/Widgets.styled";

const FlightDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  text-align: center;
`;

const FlightDetails = ({ data, flightId, confirmationNumber = null }) => {
  // Destructure props
  const {
    vehicle: { make: vehicleMake, model: vehicleModel, name: vehicleName },
  } = data;

  const {
    user: { first_name: firstName, last_name: lastName },
  } = useSelector((state) => state.auth);

  // ------------------------------------
  // ------------------------------------
  //
  // Main
  //
  // ------------------------------------
  // ------------------------------------
  return (
    <FlightDetailsDiv>
      {/* Only show confirmation number and passenger name if we
      are showing a confirmation page or a list of users reservations */}
      {confirmationNumber ? (
        <>
          <CenteredTextRow
            lgd="Confirmation number"
            readout={confirmationNumber}
          />
          <CenteredTextRow
            lgd="Passenger"
            readout={`${capitalize(firstName)} ${capitalize(lastName)}`}
          />
        </>
      ) : null}

      {/* Always show the information below */}
      <CenteredTextRow lgd="Flight" readout={flightId} />
      <CenteredTextRow
        lgd="Spacecraft"
        readout={`${vehicleMake} ${vehicleModel} - "${vehicleName}"`}
      />
    </FlightDetailsDiv>
  );
};

export default FlightDetails;
