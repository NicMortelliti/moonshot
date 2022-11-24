import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import { PrivateRoute } from "./helpers/PrivateRoute";
import Login from "./features/User/Login";
import Signup from "./features/User/Signup";
import Dashboard from "./features/User/Dashboard";

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
      <Switch>
        <Route exact component={Login} path="/sessions" />
        <Route exact component={Signup} path="/users" />
        <PrivateRoute exact component={Dashboard} path="/" />
      </Switch>
    </div>
  );
}

export default App;
