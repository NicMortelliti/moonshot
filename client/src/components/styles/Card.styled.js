import styled from "styled-components";
import { Flex } from "./Flex.styled";

export const StyledReservationCard = styled(Flex)`
  flex-direction: column;
  background-color: white;
  color: ${({ theme }) => theme.colors.dark};
`;
