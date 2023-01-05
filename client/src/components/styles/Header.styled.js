import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderListItem = styled(NavLink)`
  /* Color and style */
  color: ${({ theme }) => theme.colors.header};

  padding: 5px 16px 10px;
  text-decoration: none;

  /* Size */
  font-size: 1.2em;
  font-weight: 800;

  /* Alignment */
  display: flex;
  text-align: center;
  align-self: end;

  font-family: "Gruppo";
  text-shadow: black 1px 0 10px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hoverColor};
  }

  &.active {
    color: ${({ theme }) => theme.accent};
    font-weight: 400;
    border-top: 5px solid;
    border-color: ${({ theme }) => theme.hoverColor};

    border-radius: 0;
    background: ${({ theme }) => `${theme.accent}20` || "black"};
    backdrop-filter: blur(30px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
