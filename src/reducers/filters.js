import {
  SET_TEXT_FILTER,
  SORT_BY_PAGE_COUNT,
  SORT_BY_AUTHOR,
  SORT_BY_TITLE,
  SET_BOOKSHELF,
} from "../actions/variables";

// Filter Reducer
// ----------------------------------------------------------

const filtersReducerDefaultState = {
  sortBy: "title",
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text,
      };
    case SORT_BY_PAGE_COUNT:
      return {
        ...state,
        sortBy: "pageCount",
      };
    case SORT_BY_AUTHOR:
      return {
        ...state,
        sortBy: "author",
      };
    case SORT_BY_TITLE:
      return {
        ...state,
        sortBy: "title",
      };
    case SET_BOOKSHELF:
      return {
        ...state,
        currentBookshelf: action.bookshelf,
      };
    default:
      return state;
  }
};

export default filtersReducer;
