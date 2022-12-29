import styled from "styled-components";

// Styled Components
import { FrostBaseline } from "../styles/Frost.styled";

export const ProfileSection = styled.div`
  align-items: stretch;
  justify-content: stretch;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2em;
`;

export const ActionPanel = styled(FrostBaseline)`
  display: flex;
  flex-direction: column;
`;

export const ProfileActionSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: start;
  align-items: center;
  gap: 1em;
  padding: 1em;
`;
