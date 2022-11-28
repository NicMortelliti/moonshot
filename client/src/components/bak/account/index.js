import React, { useState } from "react";

// Components
import Login from "./Login";
import Signup from "./Signup";

export function AccountBox(props) {
  const [active, setActive] = useState("login");

  return (
    <div>
      {/* Display login or signup form depending on "active" state */}
      {active === "login" ? (
        <Login setUser={props.setUser} setActive={setActive} />
      ) : (
        <Signup setUser={props.setUser} setActive={setActive} />
      )}
    </div>
  );
}
