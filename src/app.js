import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import regeneratorRuntime from "regenerator-runtime";
import history from "./history";

import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";

import "./styles/styles.scss";
import "normalize.css/normalize.css";

const store = configureStore();

const runApp = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const appRoot = document.getElementById("app");
ReactDOM.render(runApp, appRoot);
