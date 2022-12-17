import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { NavLink } from "react-router-dom";
import { capitalize } from "../../helpers/helpers";

// Styled components
import { HeaderContainer, HeaderListItem } from "../styles/Header.styled";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // Handle logout
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  // Render user-logged-in navbar
  const RenderUserLoggedIn = () => {
    return (
      <>
        {/* Left side of nav bar */}
        <NavLink to="/flight-search">
          <HeaderListItem>BOOK</HeaderListItem>
        </NavLink>
        <NavLink to="/my-trips">
          <HeaderListItem>MY TRIPS</HeaderListItem>
        </NavLink>

        {/* Right side of nav bar */}
        <NavLink to="/login" onClick={onLogout}>
          <HeaderListItem alignment="right">Log Out</HeaderListItem>
        </NavLink>
        <NavLink to="/my-profile">
          <HeaderListItem alignment="right">
            {capitalize(user.first_name)}
          </HeaderListItem>
        </NavLink>
      </>
    );
  };

  // Render no-user-logged-in navbar
  const RenderNoUserLoggedInNav = () => {
    return (
      <>
        <NavLink to="/login">
          <HeaderListItem alignment="right">Login</HeaderListItem>
        </NavLink>
        <NavLink to="/register">
          <HeaderListItem alignment="right">Sign Up</HeaderListItem>
        </NavLink>
      </>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        opacity: 0.7,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
      }}>
      <NavLink to="/">
        <HeaderListItem>MoonShot</HeaderListItem>
      </NavLink>
      {user ? <RenderUserLoggedIn /> : <RenderNoUserLoggedInNav />}
    </div>
  );
};

export default Header;
