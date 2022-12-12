import styled from "styled-components";
import { Flex } from "./Flex.styled";

export const ReservationContainer = styled(Flex)`
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledReservationCard = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  color: ${({ theme }) => theme.colors.dark};
  width: 80%;
  max-width: 800px;
  margin: 10px;
  padding: 20px;

  & > div {
    & > h5 {
      color: ${({ theme }) => theme.colors.light};
      opacity: 0.5;
      font-size: small;
      line-height: 1;
      margin: 0;
      padding: 0;
    }
  }
`;
