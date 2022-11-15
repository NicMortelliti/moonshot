import React from "react";
import Logout from "../account/Logout";

function NavBar({ user, setUser, setDisplayedPage }) {
  return (
    <div>
      <button onClick={() => setDisplayedPage("main")}>Home</button>
      <button onClick={() => setDisplayedPage("search")}>Book</button>
      {user ? (
        <>
          <button onClick={() => setDisplayedPage("checkin")}>Check-In</button>
          <button onClick={() => setDisplayedPage("reservations")}>
            My Trips
          </button>
        </>
      ) : null}
      <button onClick={() => setDisplayedPage("status")}>Flight Status</button>
      <Logout setUser={setUser} setDisplayedPage={setDisplayedPage} />
    </div>
  );
}

export default NavBar;
