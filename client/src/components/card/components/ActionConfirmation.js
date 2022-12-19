import React from "react";

// Styled components
import { Button } from "../../styles/Button.styled";
import { CardSecondaryData as SecondaryData } from "../../styles/Card.styled";

// This is the secondary data. It resides within the
// MainContainer. It is only displayed when 'expandPanel'
// is set to true. Examples of secondary data are
// confirmation buttons, warning messages (e.g. when
// cancelling a reservation), etc.
const ActionConfirmation = ({
  expand,
  first,
  second,
  buttonText,
  secondaryButtonType,
  handleClick,
}) => {
  return (
    <>
      {expand ? (
        <SecondaryData>
          <h4>{first}</h4>
          <p>{second}</p>
          <div
            style={{
              display: "flex",
              flex: "1 1 100%",
              alignItems: "space-between",
              justifyContent: "space-between",
            }}>
            <Button
              alert
              secondary={secondaryButtonType}
              text={buttonText}
              handleClick={handleClick}
            />
          </div>
        </SecondaryData>
      ) : null}
    </>
  );
};

export default ActionConfirmation;
