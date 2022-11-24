import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Login from "./features/User/Login";
import Signup from "./features/User/Signup";
import Dashboard from "./features/User/Dashboard";
import { PrivateRoute } from "./helpers/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Login} path="/login" />
          <Route exact component={Signup} path="/signup" />
          <PrivateRoute exact component={Dashboard} path="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
