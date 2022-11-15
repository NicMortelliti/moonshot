import React from "react";

function Logout({ setUser }) {
  function handleClick() {
    fetch("/sessions", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return <button onClick={()=>handleClick()}>Logout</button>;
}

export default Logout;
