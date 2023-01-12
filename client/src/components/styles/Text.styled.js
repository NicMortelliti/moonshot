import styled from "styled-components";
import { theme } from "./Theme";

const color = ({ light }) => (light ? theme.light : "black");

export const H1 = styled.h1`
  text-shadow: ${({ theme, fancy }) =>
    fancy ? `${theme.accent} 1px 0 10px, black 2px 2px 5px` : null};
  font-size: clamp(1rem, -0.875rem + 8.333333vw, 5rem);
  color: ${color};
`;

export const H2 = styled.h2`
  align-self: ${({ center }) => center && "center"};
  color: ${color};
  text-shadow: ${({ fancy }) => (fancy ? `black 2px 2px 1px` : null)};
`;

export const H3 = styled.h3`
  color: ${color};
`;

export const H4 = styled.h4`
  color: ${color};
`;

export const H5 = styled.h5`
  color: ${color};
`;

export const P = styled.p`
  color: ${color};
  font-weight: ${({ fancy }) => fancy && "lighter"};
  text-shadow: ${({ fancy }) => (fancy ? ` black 2px 2px 1px` : null)};
`;
