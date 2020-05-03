import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store.js";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// addPost("petyshok");

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App
      // state={state}
      // dispatch={store.dispatch.bind(store)}
      // store={store}
      />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
