import {
  SET_TEXT_FILTER,
  SORT_BY_PAGE_COUNT,
  SORT_BY_AUTHOR,
  SORT_BY_TITLE,
  SET_BOOKSHELF,
  TOGGLE_READ_STATUS_VISIBILITY,
  SET_BOOKSHELF_FORMAT,
  SET_BOOKSHELF_GENRE,
  TOGGLE_UNREAD_STATUS_VISIBILITY,
} from "../actions/variables";

// Filter Reducer
// ----------------------------------------------------------

const filtersReducerDefaultState = {
  sortBy: "title",
  readOnlyVisibility: false,
  unreadOnlyVisibility: false,
  currentBookshelfFormat: undefined,
  currentBookshelfGenre: undefined,
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
        filterSource: action.filterSource,
      };
    case TOGGLE_READ_STATUS_VISIBILITY:
      return {
        ...state,
        readOnlyVisibility: action.payload,
        unreadOnlyVisibility: false,
      };
    case TOGGLE_UNREAD_STATUS_VISIBILITY:
      return {
        ...state,
        unreadOnlyVisibility: action.payload,
        readOnlyVisibility: false,
      };
    case SET_BOOKSHELF_FORMAT:
      return {
        ...state,
        currentBookshelfFormat: action.format,
      };
    case SET_BOOKSHELF_GENRE:
      return {
        ...state,
        currentBookshelfGenre: action.genre,
      };
    default:
      return state;
  }
};

export default filtersReducer;
