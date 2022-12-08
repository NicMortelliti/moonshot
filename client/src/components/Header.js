import React from "react";
import { FaRocket, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

// Styled components
import {
  HeaderContainer,
  LeftContainer,
  RightContainer,
  HeaderInnerContainer,
  HeaderLinkContainer,
  HeaderLink,
  HeaderLogo,
} from "./styles/Header.styled";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // Handle logout
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  // Render user-logged-in navbar
  const RenderUserLoggedInNavRight = () => {
    return (
      <>
        <HeaderLink to="/my-profile">
          <FaUser />{" "}
          {user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)}
        </HeaderLink>
        <HeaderLink to="/" onClick={onLogout}>
          <FaSignOutAlt /> Log Out
        </HeaderLink>
      </>
    );
  };
  const RenderUserLoggedInNavLeft = () => {
    return (
      <>
        <HeaderLink exact to="/flight-search">
          BOOK
        </HeaderLink>
        <HeaderLink exact to="/my-trips">
          MY TRIPS
        </HeaderLink>
      </>
    );
  };

  // Render no-user-logged-in navbar
  const RenderNoUserLoggedInNav = () => {
    return (
      <>
        <HeaderLink exact to="/login">
          <FaSignInAlt /> Login
        </HeaderLink>
        <HeaderLink exact to="/register">
          <FaUser /> Register
        </HeaderLink>
      </>
    );
  };

  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <LeftContainer>
          <HeaderLogo exact to="/">
            <FaRocket /> <h1>MoonShot</h1>
          </HeaderLogo>
          {user ? <RenderUserLoggedInNavLeft /> : null}
        </LeftContainer>
        <RightContainer>
          <HeaderLinkContainer>
            {user ? <RenderUserLoggedInNavRight /> : RenderNoUserLoggedInNav}
          </HeaderLinkContainer>
        </RightContainer>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
};

export default Header;
