import React from "react";

// Styled components
import { MinimalButton } from "../../styles/Button.styled";
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
            <MinimalButton
              alert
              margin="20px 0 0"
              onClick={(e) => handleClick(e, true)}>
              {buttonText}
            </MinimalButton>
          </div>
        </SecondaryData>
      ) : null}
    </>
  );
};

export default ActionConfirmation;
