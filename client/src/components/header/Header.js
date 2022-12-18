import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
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
      name: "Sign Up",
      link: "/register",
      alignment: "end",
      handleClick: null,
      userLoggedIn: false,
      authAgnostic: false,
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
      name: user ? capitalize(user.first_name) : null,
      link: "/my-profile",
      alignment: "end",
      handleClick: null,
      userLoggedIn: true,
      authAgnostic: false,
    },
  ];

  // Render each individual button
  const Button = ({ data }) => {
    const { name, link, handleClick } = data;
    return (
      <HeaderListItem to={link} onClick={handleClick ? handleClick : null}>
        {name}
      </HeaderListItem>
    );
  };

  // Filter the buttons by their alignment value
  const leftAlignedButtons = links.filter((link) => link.alignment === "start");
  const rightAlignedButtons = links.filter((link) => link.alignment === "end");

  // Render button section
  const RenderButtonSection = ({ buttons }) => (
    <div style={{ display: "flex" }}>
      {buttons.map((eachButton) => {
        if (
          // Button will be displayed ONLY when:
          //    - authAgnostic is set to true
          //    - user logged in AND button is tagged to be displayed when logged in
          //    - NO user logged in AND button is tagged to be displayed when NOT logged in
          eachButton.authAgnostic ||
          (user !== null && eachButton.userLoggedIn) ||
          (user === null && !eachButton.userLoggedIn)
        ) {
          return <Button data={eachButton} />;
        }
        // To appease the arrow function, we'll
        // return null, just to return "something"
        return null;
      })}
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
      }}>
      <RenderButtonSection buttons={leftAlignedButtons} />
      <RenderButtonSection buttons={rightAlignedButtons} />
    </div>
  );
};

export default Header;
