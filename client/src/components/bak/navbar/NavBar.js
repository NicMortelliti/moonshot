import React from "react";
import Logout from "../account/Logout";

function NavBar({ user, setUser, setDisplayedPage }) {
  // Display public and user facing button
  const handleClick = (e) => {
    e.preventDefault();
    setDisplayedPage(e.target.name);
  };

  // Display nav bar background
  const RenderNavBarBackground = () => (
    <div
      style={{
        backgroundColor: "#1b1b1d",
        width: "100vw",
        height: "2em",
        border: "1px solid #1b1b1d",
      }}>
      <RenderNavBarButtons />
    </div>
  );

  // Display nav bar buttons
  const RenderNavBarButtons = () =>
    user ? (
      <div>
        <button name="main" onClick={(e) => handleClick(e)}>
          Home
        </button>
        <button name="search" onClick={(e) => handleClick(e)}>
          Book
        </button>
        <button onClick={() => setDisplayedPage("reservations")}>
          My Trips
        </button>
        <Logout setUser={setUser} setDisplayedPage={setDisplayedPage} />
      </div>
    ) : null;

  return (
    <div>
      <RenderNavBarBackground />
    </div>
  );
}

export default NavBar;
