import styled from "styled-components";
import { theme } from "./Theme";

export const H1 = styled.h1`
  color: ${({ light }) => (light ? theme.colors.light : theme.colors.dark)};
`;

export const H2 = styled.h2`
  color: ${({ light }) => (light ? theme.colors.light : theme.colors.dark)};
`;

export const P = styled.p`
  color: ${({ light }) => (light ? theme.colors.light : theme.colors.dark)};
`;
