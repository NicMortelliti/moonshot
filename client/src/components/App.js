import React, { useState } from "react";

// Components
import Login from "./account/Login";
import Signup from "./account/Signup";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Login setUser={setUser} />
      <Signup setUser={setUser} />
    </div>
  );
}

export default App;
