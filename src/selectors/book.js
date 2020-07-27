import lodash from "lodash";

// Get visible books (merge books & filters)
// ----------------------------------------------------------

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

export const getBookshelfByFormat = (books, filters) => {
  const { currentBookshelf } = filters;
  const shelf = Object.values(books).filter((book) => {
    return book.format.toLowerCase() === currentBookshelf.toLowerCase();
  });
  return shelf;
};

export const getBookshelfByGenre = (books, genre) => {
  let shelf = [];
  Object.values(books).map((book) => {
    if (book.genres.includes(genre)) {
      return shelf.push(book);
    }
  });
  return shelf;
};
