import lodash from "lodash";

import {
  ADD_BOOK,
  REMOVE_BOOK,
  EDIT_BOOK,
  SET_CURRENT_BOOK,
  FETCH_ALL_BOOKS,
} from "../actions/variables";

// Book Reducer
// ----------------------------------------------------------
const bookReducerDefaultState = {};

const bookReducer = (state = bookReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case SET_CURRENT_BOOK:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case REMOVE_BOOK:
      return _.omit(state, action.payload);
    case FETCH_ALL_BOOKS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default bookReducer;
