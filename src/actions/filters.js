import {
  SORT_BY_PAGE_COUNT,
  SORT_BY_AUTHOR,
  SORT_BY_TITLE,
  SORT_BY_DATE_READ,
  TOGGLE_READ_STATUS_VISIBILITY,
  TOGGLE_UNREAD_STATUS_VISIBILITY,
  SET_BOOKSHELF_FORMAT,
  SET_BOOKSHELF_GENRE,
  SET_TEXT_FILTER,
} from "./variables";

// Filter Actions
// ----------------------------------------------------------

export const setTextFilter = (text = "") => ({
  type: SET_TEXT_FILTER,
  text,
});

export const sortByPageCount = () => ({
  type: SORT_BY_PAGE_COUNT,
});

export const sortByAuthor = () => ({
  type: SORT_BY_AUTHOR,
});

export const sortByTitle = () => ({
  type: SORT_BY_TITLE,
});

export const sortByDateRead = () => ({
  type: SORT_BY_DATE_READ,
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
