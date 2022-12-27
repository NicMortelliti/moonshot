import styled from "styled-components";
import { theme } from "./Theme";

const color = ({ light }) => (light ? theme.accent : "black");

export const H1 = styled.h1`
  color: ${color};
`;

export const H2 = styled.h2`
  color: ${color};
`;

export const P = styled.p`
  color: ${color};
`;
