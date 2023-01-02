import styled from "styled-components";
import { theme } from "./Theme";

const fancyFont = "Gruppo";

const color = ({ light }) => (light ? theme.light : "black");

export const H1 = styled.h1`
  font-family: ${({ fancy }) => fancy && fancyFont};
  font-size: ${({ large }) => large && "6em"};
  color: ${color};
`;

export const H2 = styled.h2`
  font-family: ${({ fancy }) => fancy && fancyFont};
  color: ${color};
`;

export const H3 = styled.h3`
  font-family: ${({ fancy }) => fancy && fancyFont};
  color: ${color};
`;

export const H4 = styled.h4`
  font-family: ${({ fancy }) => fancy && fancyFont};
  color: ${color};
`;

export const H5 = styled.h5`
  font-family: ${({ fancy }) => fancy && fancyFont};
  color: ${color};
`;

export const P = styled.p`
  color: ${color};
  font-weight: ${({ fancy }) => fancy && "lighter"};
`;
