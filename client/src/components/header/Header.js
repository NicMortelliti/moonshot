import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { NavLink } from "react-router-dom";
import { capitalize } from "../../helpers/helpers";

// Styled components
import { HeaderListItem } from "../styles/Header.styled";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // Handle logout
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  const links = [
    {
      name: "MoonShot",
      link: "/",
      alignment: "start",
      handleClick: null,
      userLoggedIn: false,
      authAgnostic: true,
    },
    {
      name: "Log In",
      link: "/login",
      alignment: "end",
      handleClick: null,
      userLoggedIn: false,
      authAgnostic: false,
    },
    {
      name: "Sign Up",
      link: "/register",
      alignment: "end",
      handleClick: null,
      userLoggedIn: false,
      authAgnostic: false,
    },
    {
      name: "BOOK",
      link: "/flight-search",
      alignment: "start",
      handleClick: null,
      userLoggedIn: true,
      authAgnostic: false,
    },
    {
      name: "MY TRIPS",
      link: "/my-trips",
      alignment: "start",
      handleClick: null,
      userLoggedIn: true,
      authAgnostic: false,
    },
    {
      name: "Log Out",
      link: "login",
      alignment: "end",
      handleClick: onLogout,
      userLoggedIn: true,
      authAgnostic: false,
    },
    {
      name: capitalize(user.first_name),
      link: "/my-profile",
      alignment: "end",
      handleClick: null,
      userLoggedIn: true,
      authAgnostic: false,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "black",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        border: "2px dotted red",
      }}>
      {links.map(({ name, link, alignment, userLoggedIn }) =>
        user ? (
          userLoggedIn ? (
            <HeaderListItem to={link}>{name}</HeaderListItem>
          ) : null
        ) : (
          <HeaderListItem to={link}>{name}</HeaderListItem>
        )
      )}
      ;
    </div>
  );
};

export default Header;
