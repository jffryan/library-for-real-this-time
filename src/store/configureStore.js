import { createStore, applyMiddleware, compose } from "redux";
import combinedReducers from "../reducers/index";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combinedReducers,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
  return store;
};
