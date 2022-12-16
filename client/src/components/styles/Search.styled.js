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

  background-color: ${({ theme }) => theme.bgColors.button};
  color: ${({ theme }) => theme.colors.button};
  border: none;

  overflow-wrap: normal;
  margin: 5px;

  width: 100px;
  height: 100px;

  p {
    justify-content: center;
  }

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
