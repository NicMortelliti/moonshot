import styled from "styled-components";

export const SearchContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const FlightContainer = styled.div`
  background-color: ${({ theme }) => theme.bgColors.light};
  color: ${({ theme }) => theme.colors.dark};

  display: flex;

  width: 90vw;
  margin: 5px;
  & > div {
    display: flex;
    flex-direction: column;
    padding: 20px;

    & > div {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
  }
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
