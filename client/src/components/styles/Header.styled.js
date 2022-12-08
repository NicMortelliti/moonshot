import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.bgColors.header};
  color: ${({ theme }) => theme.colors.header};
  padding: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContainer = styled.div`
  flex: 60%;
  display: flex;
  align-items: center;
  padding-left: 50px;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
`;

export const HeaderInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const HeaderLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.header};
  font-size: large;
  font-weight: 200;
  text-decoration: none;
  margin: auto 10px;
  padding-bottom: auto;

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
  font-size: x-large;
  font-weight: 400;
  text-decoration: none;
  margin: auto 10px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hoverColor};
  }
`;
