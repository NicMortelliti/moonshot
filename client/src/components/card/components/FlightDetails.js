import React from "react";
import { capitalize } from "../../../helpers/helpers";
import { useSelector } from "react-redux";

// Styled components
import { CardPrimaryData as PrimaryData } from "../../styles/Card.styled";
import { CenteredTextRow } from "../../styles/Widgets.styled";

const FlightDetails = ({ data, flightId, confirmationNumber = null }) => {
  // Destructure props
  const {
    vehicle: { make: vehicleMake, model: vehicleModel, name: vehicleName },
  } = data;

  const {
    user: { first_name: firstName, last_name: lastName },
  } = useSelector((state) => state.auth);

  return (
    <PrimaryData>
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
    </PrimaryData>
  );
};

export default FlightDetails;
