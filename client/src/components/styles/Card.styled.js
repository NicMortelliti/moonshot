import styled from "styled-components";

// This is the main container. It is where all data
// will reside. The cards background color, dimensions
// and layout are set here.
export const CardContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
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
