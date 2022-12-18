import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.ul`
  /* Color and style */
  background-color: ${({ theme }) => theme.bgColors.header};
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  /* Fix bar to top of page */
  position: fixed;
  top: 0;

  /* Set to full width of page */
  width: 100%;

  /* This places the header on top of any elements
  in body of the site. Items with opacity were
  visible in the header when scrolling */
  z-index: 999;
`;

export const HeaderListItem = styled(NavLink)`
  /* Color and style */
  color: ${({ theme }) => theme.colors.header};

  padding: 14px 16px;
  text-decoration: none;

  /* Size */
  font-size: ${(props) => props.fontSize || "large"};
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
    color: ${({ theme }) => theme.hoverColor};
    font-weight: 400;
    border-top: 5px solid;
    border-color: ${({ theme }) => theme.hoverColor};
  }
`;
