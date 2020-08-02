import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import regeneratorRuntime from "regenerator-runtime";

import configureStore from "./config/store/configureStore";
import AppRouter from "./config/routers/AppRouter";

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
