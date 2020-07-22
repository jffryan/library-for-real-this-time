// A file to keep track of all the things that eventually will need to be in state/updated
import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";

// Book Actions
// ----------------------------------------------------------

// ADD_BOOK
const addBook = ({
  title = "Book Title",
  author = "No Author",
  pageCount = 0,
  dateRead = 0,
  rating = 0,
  genre = "",
  type = "",
  duration = 0,
  awards = undefined,
  notes = "",
} = {}) => ({
  type: "ADD_BOOK",
  book: {
    id: uuid(),
    title,
    author,
    pageCount,
    dateRead,
    rating,
    genre,
    type,
    duration,
    awards,
    notes,
  },
});

// REMOVE_BOOK
const removeBook = ({ id } = {}) => ({
  type: "REMOVE_BOOK",
  id,
});

// EDIT_BOOK
const editBook = (id, updates) => ({
  type: "EDIT_BOOK",
  id,
  updates,
});

// Book Reducer
// ----------------------------------------------------------
const bookReducerDefaultState = [];

const bookReducer = (state = bookReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];
    case "REMOVE_BOOK":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_BOOK":
      return state.map((book) => {
        if (book.id === action.id) {
          // return a new object
          return {
            // Grab its existing properties
            ...book,
            // Override any properties passed down by the function
            ...action.updates,
          };
        } else {
          return book;
        }
      });
    default:
      return state;
  }
};

// Filter Actions
// ----------------------------------------------------------

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

// Just two examples of sorting by every possible attribute
const sortByPageCount = () => ({
  type: "SORT_BY_PAGE_COUNT",
});

const sortByAuthor = () => ({
  type: "SORT_BY_AUTHOR",
});

// Filter Reducer
// ----------------------------------------------------------

const filtersReducerDefaultState = {
  author: "",
  sortBy: [],
  startDate: undefined,
  endDate: undefined,
  genre: [],
  type: [],
  readStatus: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_PAGE_COUNT":
      return {
        ...state,
        sortBy: "pageCount",
      };
    case "SORT_BY_AUTHOR":
      return {
        ...state,
        sortBy: "author",
      };
    default:
      return state;
  }
};

// Get visible books (merge books & filters)
// ----------------------------------------------------------

const getVisibleBooks = (books, filters) => {
  return books.filter((book) => {
    // SAMPLE SYNTAX
    /*
      const startDateMatch =
        typeof startDate !== "number" || book.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || book.createdAt <= endDate;
    const textMatch =
      typeof text !== "string" ||
      expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
      */
    return book;
  });
};

// Store creation
// ----------------------------------------------------------
const store = createStore(
  combineReducers({
    books: bookReducer,
    filters: filtersReducer,
  })
);

// Set up store to watch changes
store.subscribe(() => {
  console.log(store.getState());
});

// Playing around
// ----------------------------------------------------------

const thisSideDemo = store.dispatch(
  addBook({
    title: "This Side of Paradise",
    author: "F. Scott Fitzgerald",
    pageCount: 277,
    dateRead: 0,
    rating: 5,
    genre: "Fiction",
    type: "Paper",
    duration: 24,
    awards: undefined,
    notes: "",
  })
);

store.dispatch(sortByPageCount());

store.dispatch(editBook(thisSideDemo.book.id, { dateRead: "6/30/20" }));

const demoState = {
  books: [
    {
      id: "alkjboasjb",
      title: "This Side of Paradise",
      author: "F. Scott Fitzgerald",
      pageCount: 277,
      dateRead: 0,
      rating: 5,
      genre: "Fiction",
      type: "Paper",
      duration: 24,
      awards: undefined,
      notes: "",
    },
  ],
  filters: {
    author: "Fitzgerald",
    sortBy: "pageCount", //book attribute
    startDate: undefined,
    endDate: undefined,
    genre: "Fiction",
    type: "Paper",
    readStatus: true,
  },
};
