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
      name: user ? capitalize(user.first_name) : null,
      link: "/my-profile",
      alignment: "end",
      handleClick: null,
      userLoggedIn: true,
      authAgnostic: false,
    },
  ];

  const Button = ({ data }) => {
    const { name, link, alignment, handleClick } = data;
    return (
      <HeaderListItem to={link} onClick={handleClick ? handleClick : null}>
        {name}
      </HeaderListItem>
    );
  };

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
      }}>
      {/* Map through each item in the links object.
If a user is logged in  AND the items userLoggedIn
value is 'true', render the button, else don't
render it. If both user and userLoggedIn are
'false', render the button, else don't render it. */}
      {links.map((each) => {
        // Determine if the button should be rendered.
        // First if an item in the links object is tagged
        // as 'authAgnostic' it breaks out of this statement,
        // sets buttonMeetsRequirement to true, then goes
        // on to be rendered.
        // If it's not tagged as 'authAgnostic' it checks
        // the next if statement ('if (user !== null)'), if it
        // passes, it checks if the 'userLoggedIn' tag
        // is set to 'true'. If it is, the button gets rendered.
        // The final if statement ('if (user === null)' and
        // 'if (!userLoggedIn)') will render the button
        // if there is no user logged in.
        if (each.authAgnostic) {
          return <Button data={each} key={each.name} />;
        } else if (user !== null) {
          if (each.userLoggedIn) {
            return <Button data={each} key={each.name} />;
          }
        } else if (!each.userLoggedIn) {
          return <Button data={each} key={each.name} />;
        }
      })}
    </div>
  );
};

export default Header;
