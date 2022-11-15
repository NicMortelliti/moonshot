import React, { useEffect, useState } from "react";

// Components
import { AccountBox } from "./account";
import { Body } from "./body";
import NavBar from "./navbar/NavBar";

function App() {
  const [user, setUser] = useState(null);

  // auto-login
  useEffect(() => {
    fetch("/me").then((r) => {
      r.ok && r.json().then((user) => setUser(user));
    });
  }, []);

  return (
    <div>
      <header className="App-header"></header>
      {
        // Display account login/signup box if user is not set
        !user ? (
          <AccountBox setUser={setUser} />
        ) : (
          <div>
            <NavBar setUser={setUser} />
            <Body user={user} />
          </div>
        )
      }
    </div>
  );
}

export default App;
