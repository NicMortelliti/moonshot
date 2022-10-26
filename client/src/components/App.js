import React, { useEffect, useState } from "react";

// Components
import { AccountBox } from "./account";
import { Body } from "./body";

function App() {
  const [user, setUser] = useState(null);

  // auto-login
  useEffect(() => {
    fetch("/me").then((r) => {
      r.ok && r.json().then((user) => setUser(user));
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      {
        // Display account login/signup box if user is not set
        !user ? <AccountBox setUser={setUser} /> : <Body />
      }
    </div>
  );
}

export default App;
