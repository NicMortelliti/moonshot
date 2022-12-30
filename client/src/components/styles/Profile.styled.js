import styled from "styled-components";

// Styled Components
import { FrostBaseline } from "../styles/Frost.styled";

export const ProfileSection = styled.div`
  align-items: start;
  justify-content: stretch;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2em;
`;

export const ActionPanel = styled(FrostBaseline)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
`;

export const ProfileActionSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: start;
  align-items: start;
  gap: 1em;
  padding: 1em 0;
`;
