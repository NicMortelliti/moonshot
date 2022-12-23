import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 2em;
  z-index: 999;
`;

export const HeaderListItem = styled(NavLink)`
  /* Color and style */
  color: ${({ theme }) => theme.colors.header};

  padding: 14px 16px;
  text-decoration: none;

  /* Size */
  font-size: 2vw;
  font-weight: 300;

  /* Alignment */
  display: flex;
  text-align: center;
  align-self: end;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hoverColor};
  }

  /* TODO Figure out how to capture if a link is actively selected */
  &.active {
    color: ${({ theme }) => theme.accent};
    font-weight: 400;
    border-top: 5px solid;
    border-color: ${({ theme }) => theme.hoverColor};

    border-radius: 0;
    background: ${({ theme }) => `${theme.accent}20` || "black"};
    backdrop-filter: blur(30px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

    /* max-width: ${({ maxWidth }) => maxWidth || "auto"}; */

    justify-content: center;
    align-items: center;
    text-align: center;
    /* padding: 30px; */
  }
`;
