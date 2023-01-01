import styled from "styled-components";
import { Flex } from "./Flex.styled";

export const SearchContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const FlightContainer = styled(Flex)`
  background-color: ${({ theme }) => theme.bgColors.light};
  color: ${({ theme }) => theme.colors.dark};
  direction: column;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;

  width: 80%;
  max-width: 800px;
  margin: 5px;
`;

export const SearchLocationButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgColors.button};
  color: ${({ theme }) => theme.colors.button};
  border: 1px solid black;
  margin: 10px 0;

  justify-content: center;
  align-items: center;

  overflow-wrap: normal;

  width: 100px;
  height: 100px;

  &:hover,
  &:focus {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const SearchFlex = styled(Flex)`
  & > h5,
  & > h3,
  & > p {
    margin-bottom: 5px;
  }

  & > h5 {
    margin-top: 5px;
  }
`;

export const SeatsContainer = styled(SearchFlex)`
  background-color: ${({ theme }) => theme.alert};
`;

export const SearchLocationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  padding: auto;
  margin: 0 3em;

  gap: 1em;

  div {
    display: flex;
    flex-wrap: wrap;
  }
`;
