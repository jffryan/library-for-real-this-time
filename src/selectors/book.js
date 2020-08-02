// Sort function

// ----------------------------------------------------------
export const sortVisibleBooks = (books, filters) => {
  const { sortBy } = filters;

  return books.sort((a, b) => {
    switch (sortBy) {
      case "pageCount":
        return a.pageCount > b.pageCount ? 1 : -1;
      case "author":
        return a.author > b.author ? 1 : -1;
      case "title":
        return a.title > b.title ? 1 : -1;
      case "dateRead":
        if (a.dateRead === b.dateRead) {
          return 0;
        } else if (a.dateRead === null || a.dateRead === undefined) {
          return 1;
        } else if (b.dateRead === null || b.dateRead === undefined) {
        } else {
          return a.dateRead > b.dateRead ? 1 : -1;
        }
      default:
        return [a, b];
    }
  });
};

// Filter selector functions
// ----------------------------------------------------------
export const getBooksByTextMatch = (books, filters) => {
  if (filters.text.length > 0) {
    return books.filter((book) => {
      const textMatch =
        typeof filters.text !== "string" ||
        book.title.toLowerCase().includes(filters.text.toLowerCase());
      return textMatch;
    });
  } else {
    return books;
  }
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

// --- Master function - all book filters live in here ---
export const filterAllBooks = (books, filters) => {
  // Filter all books by format
  const filteredByFormat = getBooksByFormat(books, filters);
  // Pass down to genre filter
  const filteredByGenre = getBooksByGenre(filteredByFormat, filters);
  // Now toggle if the book has been read or not
  const filteredByReadOrUnread = readVisibilityToggle(filteredByGenre, filters);
  // Check if title matches search query
  const filteredByTextMatch = getBooksByTextMatch(
    filteredByReadOrUnread,
    filters
  );
  // Sort results by filter sortby state
  const sortedResults = sortVisibleBooks(filteredByTextMatch, filters);
  // Return final fully filtered & sorted result
  return sortedResults;
};
