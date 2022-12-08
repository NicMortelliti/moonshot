import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.ul`
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
`;

export const HeaderListItem = styled.li`
  float: ${(props) => props.alignment || "left"};
  color: ${({ theme }) => theme.colors.header};
  font-size: large;
  font-weight: 300;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hoverColor};
  }

  &.active {
    color: ${({ theme }) => theme.hoverColor};
    font-weight: 400;
    border-bottom: 5px solid;
    border-color: ${({ theme }) => theme.hoverColor};
  }
`;

export const HeaderLogo = styled(NavLink)`
  color: ${({ theme }) => theme.colors.header};
  font-size: large;
  font-weight: 400;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hoverColor};
  }
`;
