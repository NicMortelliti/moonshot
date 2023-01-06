import styled from "styled-components";

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

export const SearchLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
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

// -------------------------------------------
// GRID --------------------------------------
// -------------------------------------------
export const FlightGrid = styled.div`
  display: grid;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.white || "white"};
  grid-template-rows: auto;
  width: 80%;
  max-width: 800px;
  gap: 0 1em;
  margin: 1em;
  min-height: 110px;
  padding: 1em;
  grid-template-areas:
    "carrier      flightNo"
    "origin       departure"
    "destination  arrival";

  /* For displays 500px and larger */
  @media (min-width: 500px) {
    grid-template-columns: auto 4fr auto 1fr;
    grid-template-areas:
      "carrier        carrier .           price"
      "departure      .       arrival     price"
      "departureYear  slot    arrivalYear price"
      "departureYear  .       arrivalYear price"
      "origin         .       destination price"
      "confirm        confirm confirm     confirm";
  }
`;

export const Carrier = styled.p`
  grid-area: carrier;
  color: ${({ theme }) => theme.gray || "gray"};
`;

export const Origin = styled.p`
  grid-area: origin;
  color: ${({ theme }) => theme.gray || "gray"};
`;

export const Departure = styled.p`
  grid-area: departure;
  color: ${({ theme }) => theme.gray || "gray"};
`;

export const DepartureYear = styled.h2`
  grid-area: departureYear;
`;

export const Destination = styled.p`
  grid-area: destination;
  display: flex;
  justify-content: end;
  color: ${({ theme }) => theme.gray || "gray"};
`;

export const Arrival = styled.p`
  grid-area: arrival;
  display: flex;
  justify-content: end;
  color: ${({ theme }) => theme.gray || "gray"};
`;

export const ArrivalYear = styled.h2`
  grid-area: arrivalYear;
  display: flex;
  justify-content: end;
`;

export const Slot = styled.div`
  grid-area: slot;
  display: list-item;
  border-bottom: ${({ theme }) => `2px solid ${theme.accent}`};
`;

export const Price = styled.div`
  cursor: pointer;
  grid-area: price;
  border-left: solid 1px black;
  border-radius: 0 6px 6px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1em;

  p {
    color: ${({ theme, alt }) =>
      alt === true ? theme.alert : theme.accent || "black"};
  }

  &:hover,
  &:focus {
    p {
      border-bottom: 3px solid
        ${({ theme, alt }) =>
          alt ? theme.alert : theme.accent || "blue"};
    }
  }
`;

export const Confirm = styled.div`
  grid-area: confirm;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1em;

  button {
    cursor: pointer;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: ${({ theme }) => theme.accent || "black"};
    font-size: x-large;
    width: 100%;
    padding: 0.5em;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.accent || "blue"};
      color: ${({ theme }) => theme.white || "white"};
    }
  }
`;

export const ResultsHeader = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;

  div h3,
  div h1 {
    justify-content: center;
    line-height: 1.2;
  }

  svg {
    font-size: clamp(1rem, -0.875rem + 8.333333vw, 5rem);
    color: ${({ theme }) => theme.white || "white"};
  }
`;
