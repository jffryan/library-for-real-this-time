import lodash from "lodash";

// Get visible books (merge books & filters)
// ----------------------------------------------------------

// *** Should rework this to just be a bunch of individual functions that toggle on or off ***
export const getVisibleBooks = (books, filters) => {
  const { text, sortBy } = filters;
  return books
    .filter((book) => {
      const textMatch =
        typeof text !== "string" ||
        book.title.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "pageCount":
          return a.pageCount > b.pageCount ? 1 : -1;
        case "author":
          return a.author > b.author ? 1 : -1;
        case "title":
          return a.title > b.title ? 1 : -1;
        default:
          return [a, b];
      }
    });
};

export const getBooksByFormat = (books, filters) => {
  const { currentBookshelfFormat } = filters;
  if (currentBookshelfFormat !== undefined) {
    let shelf = [];
    Object.values(books).map((book) => {
      if (book.format.toLowerCase() === currentBookshelfFormat.toLowerCase()) {
        return shelf.push(book);
      }
    });
    return shelf;
  } else {
    return books;
  }
};

export const getBooksByGenre = (books, filters) => {
  if (filters.currentBookshelfGenre !== undefined) {
    let shelf = [];
    const genre = filters.currentBookshelfGenre;
    Object.values(books).map((book) => {
      if (book.genres.includes(genre)) {
        return shelf.push(book);
      }
    });
    return shelf;
  } else {
    return books;
  }
};

export const readVisibilityToggle = (books, filters) => {
  if (filters.readOnlyVisibility === true) {
    const bookshelf = Object.values(books);
    const visibleShelf = bookshelf.filter((book) => {
      return book.hasRead === true;
    });
    return visibleShelf;
  } else if (filters.unreadOnlyVisibility === true) {
    const bookshelf = Object.values(books);
    const visibleShelf = bookshelf.filter((book) => {
      return book.hasRead === undefined;
    });
    return visibleShelf;
  } else {
    return books;
  }
};

export const filterAllBooks = (books, filters) => {
  // Filter all books by format
  const filteredByFormat = getBooksByFormat(books, filters);
  // Pass down to genre filter
  const filteredByGenre = getBooksByGenre(filteredByFormat, filters);
  // Now toggle if the book has been read or not
  const filteredByReadOrUnread = readVisibilityToggle(filteredByGenre, filters);
  // Return final fully filtered result
  return filteredByReadOrUnread;
};

// DO NOT GET MESSED UP!! FOCUS!! YOU ARE MOVING ALL THE FUNCTIONS FROM SELECTOR TESTING
// INTO THIS FILE, MATCHING "FILTERALLBOOKS" TO "CHECKSHELF"
