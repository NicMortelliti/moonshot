import styled from "styled-components";

// If a list of cards is to be displayed, this
// is the component that styles that list.
// CardContainer components will reside within
// this component.
export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  flex-basis: 90%;
  max-width: 800px;
  gap: 30px;
`;

// This is the main container. It is where all data
// will reside. The cards background color, dimensions
// and layout are set here. If a list of cards is needed,
// use the CardList styled component as a direct parent
// to this component.
export const CardContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
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

// This is a container that is used for secondary card data.
// For example, you may use this as a confirmation if a user
// clicks a "cancel" button.
export const SecondaryDataDiv = styled.div`
  background-color: ${({ theme }) => theme.accent || "null"};
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  margin: 20px 0;
  padding: 20px;
  place-content: stretch center;
  align-items: center;
  flex-basis: 100%;
`;
