import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import { store } from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <App />, document.getElementById("root")
  </Provider>
);
