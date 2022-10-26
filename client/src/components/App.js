import React, { useState } from "react";

// Components
import { AccountBox } from "./account";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <header className="App-header"></header>
      {
        // Display account login/signup box if user is not set
        !user && <AccountBox setUser={setUser} />
      }
    </div>
  );
}

export default App;
