import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderListItem = styled(NavLink)`
  /* Color and style */
  color: ${({ theme }) => theme.colors.header};
  border-top: 5px solid transparent;

  padding: 5px 16px 10px;
  text-decoration: none;

  /* Size */
  font-size: 1.2em;

  /* Alignment */
  display: flex;
  text-align: center;
  align-self: end;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hoverColor};
  }

  &.active {
    color: ${({ theme }) => theme.accent};
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
