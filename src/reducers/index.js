import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import bookReducer from "./book";
import filtersReducer from "./filters";
import configReducer from "./config";

const combinedReducers = combineReducers({
  books: bookReducer,
  filters: filtersReducer,
  form: formReducer,
  config: configReducer,
});

export default combinedReducers;
