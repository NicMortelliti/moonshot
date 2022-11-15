import React from "react";
import Logout from "../account/Logout";

function NavBar({ setUser }) {
  return (
    <div>
      <button>Flight Search</button>
      <Logout setUser={setUser} />
    </div>
  );
}

export default NavBar;
