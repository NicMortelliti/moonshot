import styled from "styled-components";
import { theme } from "./Theme";

const color = ({ light }) => (light ? theme.accent : "black");

export const H1 = styled.h1`
  color: ${color};
`;

export const H2 = styled.h2`
  color: ${color};
`;

export const H3 = styled.h3`
  color: ${color};
`;

export const H4 = styled.h4`
  color: ${color};
`;

export const P = styled.p`
  color: ${color};
`;
