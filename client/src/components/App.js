import React, { useState } from "react";
import Signup from "./account/Signup";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Signup setUser={setUser} />
    </div>
  );
}

export default App;
