import server from "../apis/jsonServer";
import history from "../config/history";

import {
  ADD_BOOK,
  REMOVE_BOOK,
  EDIT_BOOK,
  FETCH_ALL_BOOKS,
  SET_CURRENT_BOOK,
} from "./variables";

// Book Actions
// ----------------------------------------------------------

// ADD_BOOK
export const addBook = (formValues) => {
  return async (dispatch) => {
    const response = await server.post("/books", formValues);

    dispatch({ type: ADD_BOOK, payload: response.data });
  };
};

// REMOVE_BOOK
export const removeBook = (id) => async (dispatch) => {
  await server.delete(`/books/${id}`);
  dispatch({ type: REMOVE_BOOK, payload: id });
  history.push("/");
};

// EDIT_BOOK
export const editBook = (id, formValues) => async (dispatch) => {
  const response = await server.put(`/books/${id}`, formValues);

  dispatch({ type: EDIT_BOOK, payload: response.data });
  history.push("/");
};

// FETCH_ALL_BOOKS
export const fetchAllBooks = () => async (dispatch) => {
  const response = await server.get("/books");

  dispatch({ type: FETCH_ALL_BOOKS, payload: response.data });
};

// SET_CURRENT_BOOK
export const setCurrentBook = (id) => async (dispatch) => {
  const response = await server.get(`/books/${id}`);
  dispatch({ type: SET_CURRENT_BOOK, payload: response.data });
};
