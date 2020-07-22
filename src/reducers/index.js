import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import bookReducer from "./book";
import filtersReducer from "./filters";

const combinedReducers = combineReducers({
  books: bookReducer,
  filters: filtersReducer,
  form: formReducer,
});

export default combinedReducers;
