import {
  SET_TEXT_FILTER,
  SORT_BY_PAGE_COUNT,
  SORT_BY_AUTHOR,
  SORT_BY_TITLE,
  SET_BOOKSHELF,
  TOGGLE_READ_STATUS_VISIBILITY,
  TOGGLE_UNREAD_STATUS_VISIBILITY,
  SET_BOOKSHELF_FORMAT,
  SET_BOOKSHELF_GENRE,
} from "./variables";

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

export const setBookshelf = (bookshelf, filterSource) => ({
  type: SET_BOOKSHELF,
  bookshelf,
  filterSource,
});

export const setBookshelfFormat = (format) => ({
  type: SET_BOOKSHELF_FORMAT,
  format,
});

export const setBookshelfGenre = (genre) => ({
  type: SET_BOOKSHELF_GENRE,
  genre,
});

export const toggleReadStatusVisibility = (readStatus) => ({
  type: TOGGLE_READ_STATUS_VISIBILITY,
  payload: !readStatus,
});

export const toggleUnreadStatusVisibility = (unreadStatus) => ({
  type: TOGGLE_UNREAD_STATUS_VISIBILITY,
  payload: !unreadStatus,
});
