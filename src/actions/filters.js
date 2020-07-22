import {
  SET_TEXT_FILTER,
  SORT_BY_PAGE_COUNT,
  SORT_BY_AUTHOR,
  SORT_BY_TITLE,
} from "./variables";

// import server from "../apis/jsonServer";

// Filter Actions
// ----------------------------------------------------------

export const setTextFilter = (text = "") => ({
  type: SET_TEXT_FILTER,
  text,
});

// Just three examples of sorting by every possible attribute
export const sortByPageCount = () => ({
  type: SORT_BY_PAGE_COUNT,
});

export const sortByAuthor = () => ({
  type: SORT_BY_AUTHOR,
});

export const sortByTitle = () => ({
  type: SORT_BY_TITLE,
});
