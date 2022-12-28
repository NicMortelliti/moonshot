import styled from "styled-components";

// If a list of cards is to be displayed, this
// is the component that styles that list.
// CardContainer components will reside within
// this component.
export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

// This is the main container. It is where all data
// will reside. The cards background color, dimensions
// and layout are set here. If a list of cards is needed,
// use the CardList styled component as a direct parent
// to this component.
export const CardContainer = styled.div`
  border: 1px solid black;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
  flex-basis: 60%;
  min-width: 500px;
  max-width: 800px;
`;

// This is a styled div for the feedback section of the card.
// The feedback section of the card is used for messages like:
// "Success!" or "You're going to space!", etc.
export const CardFeedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// This is a styled div for the primary data on the card,
// such as flight ID, confirmation number, etc.
export const CardPrimaryData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  text-align: center;
`;

// This is a container that is used for secondary card data.
// For example, you may use this as a confirmation if a user
// clicks a "cancel" button.
export const CardSecondaryData = styled.div`
  background-color: ${({ theme }) => theme.accent || "null"};
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 20px 0;
  align-items: center;
`;

// This is a styled div for the origin/destination, horizontal
// rule and departure/arrival section of the card. It ensures
// The appropriate spacing and sizing are configured.
export const CardFromTo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2em;
`;
