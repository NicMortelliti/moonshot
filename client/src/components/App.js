import React, { useEffect, useState } from "react";

// Components
import { AccountBox } from "./account";
import { Body } from "./body";
import NavBar from "./navbar/NavBar";

function App() {
  const [user, setUser] = useState(null);
  const [displayedPage, setDisplayedPage] = useState("main");

  // auto-login
  useEffect(() => {
    fetch("/me").then((r) => {
      r.ok && r.json().then((user) => setUser(user));
    });
  }, []);

  const RenderAccountControl = () => {
    return <AccountBox setUser={setUser} />;
  };

  const RenderAppUI = () => {
    return (
      <div>
        <Body
          user={user}
          displayedPage={displayedPage}
          setDisplayedPage={setDisplayedPage}
        />
      </div>
    );
  };

  return (
    <div>
      <header className="App-header"></header>
      <NavBar user={user}  setUser={setUser} setDisplayedPage={setDisplayedPage} />
      {
        // Display account login/signup box if user is not set.
        // Otherwise, display app for user.
        !user ? <RenderAccountControl /> : <RenderAppUI />
      }
    </div>
  );
}

export default App;
