import React from "react";
import styled from "styled-components";

// Styled components
import { MinimalButton } from "../../styles/Button.styled";

const Wrapper = styled.div`
  background-color: ${({ bgColor }) => bgColor || "null"};
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  margin: 20px 0;
  padding: 20px;
  place-content: stretch center;
  align-items: center;
  flex-basis: 100%;
`;

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
        <Wrapper bgColor="lightgray">
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
        </Wrapper>
      ) : null}
    </>
  );
};

export default ActionConfirmation;
