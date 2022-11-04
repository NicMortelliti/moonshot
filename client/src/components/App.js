import React, { useEffect, useState } from "react";
import styled from "styled-components"

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

  const Background = styled.div`
    background: rgb(36,94,129);
    background: radial-gradient(circle, rgba(36,94,129,1) 0%, rgba(5,34,67,1) 100%);
    width: 100%;
    height: 100vh;
    padding: 0;
    `

  return (
    <Background className="App">
      <header className="App-header"></header>
      {
        // Display account login/signup box if user is not set
        !user ? <AccountBox setUser={setUser} /> : <Body />
      }
    </Background>
  );
}

export default App;
