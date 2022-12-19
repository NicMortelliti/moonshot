import styled from "styled-components";

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
