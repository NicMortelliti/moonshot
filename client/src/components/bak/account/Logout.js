import React from "react";

function Logout({ setUser, setDisplayedPage }) {
  function handleClick() {
    fetch("/sessions", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        setDisplayedPage("main");
      }
    });
  }
  return <button onClick={() => handleClick()}>Logout</button>;
}

export default Logout;
