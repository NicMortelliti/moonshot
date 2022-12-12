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
  align-items: flex-end;
  padding: 20px;

  display: flex;
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

  &:hover,
  &:focus {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const SeatsContainer = styled(Flex)`
  background-color: ${({ theme }) => theme.alert};
`;

export const HR = styled(Flex)`
  border-bottom: 2px solid black;
  width: 80%;
  margin: 0 auto 20px;

  & > span {
    height: 10px;
    width: 10px;
    background-color: black;
    display: inline-block;
    position: relative;
    top: 13px;
  }

  & > svg {
    font-size: x-large;
    left: -46%;
    top: 13px;
    position: relative;
    color: ${({ theme }) => theme.bgColors.dark};
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
