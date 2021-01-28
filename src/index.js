import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./store";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
