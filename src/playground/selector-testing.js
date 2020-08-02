import React, { Component } from "react";

import { filterAllBooks } from "../selectors/book";

class SelectorTesting extends Component {
  state = {
    books: [
      {
        title: "This Side of Paradise",
        author: "F. Scott Fitzgerald",
        pageCount: 277,
        genres: ["Fiction", "Modernism"],
        hasRead: true,
        dateRead: "6/30/20",
        rating: "5",
        format: "Paper",
        id: "456",
      },
      {
        title: "The Shock Doctrine",
        author: "Naomi Klein",
        pageCount: 701,
        format: "Paper",
        genres: ["History", "American Foreign Policy", "Theory"],
        hasRead: true,
        dateRead: "4/1/20",
        rating: "5",
        id: "789",
      },
      {
        title: "A Glorious Defeat",
        author: "Timothy Henderson",
        pageCount: 216,
        genres: ["History", "Latin America"],
        hasRead: true,
        dateRead: "3/4/19",
        rating: "5",
        format: "Paper",
        id: "555",
      },
      {
        title: "Capitalist Realism",
        author: "Mark Fisher",
        pageCount: 88,
        genres: ["Theory"],
        hasRead: true,
        dateRead: "7/12/20",
        rating: "4.5",
        format: "Pirated",
        id: "kAoKJ_O",
      },
      {
        title: "Go",
        author: "Kazuki Kaneshiro",
        pageCount: 165,
        format: "Ebook",
        genres: ["Fiction", "Teen"],
        hasRead: true,
        dateRead: "6/4/20",
        rating: "3.5",
        id: "aH9fLuy",
      },
      {
        title: "McMafia",
        author: "Misha Glenny",
        pageCount: 416,
        format: "Audio",
        genres: ["History", "Crime", "Economics"],
        hasRead: true,
        dateRead: "5/29/20",
        rating: "4",
        id: "GTKTsWT",
      },
      {
        title: "The Dispossessed",
        author: "Ursula K Le Guin",
        pageCount: 387,
        format: "Paper",
        genres: ["Fiction", "Sci-Fi"],
        hasRead: true,
        dateRead: "5/11/20",
        rating: "5",
        id: "_L06OES",
      },
      {
        title: "Trout Fishing In America",
        author: "Richard Brautigan",
        pageCount: 114,
        format: "Paper",
        genres: ["Fiction", "Beat Movement"],
        hasRead: true,
        dateRead: "4/6/20",
        rating: "4.5",
        id: "rhPDFjT",
      },
      {
        title: "Where We Go From Here",
        author: "Bernie Sanders",
        pageCount: 270,
        format: "Paper",
        genres: ["Memoir", "Politics"],
        hasRead: true,
        dateRead: "2/23/20",
        rating: "4",
        id: "uuXUTI9",
      },
      {
        title: "Botchan",
        author: "Natsume Soseki",
        pageCount: 188,
        format: "Paper",
        genres: ["Fiction", "Modernism"],
        id: "rLjljew",
      },
      {
        title: "Despair",
        author: "Vladimir Nabokov",
        pageCount: 212,
        format: "Paper",
        genres: ["Fiction"],
        id: "-_PKfEi",
      },
      {
        title: "EpFiles",
        author: "Brace Belden",
        pageCount: 212,
        format: "Ebook",
        genres: ["Fiction"],
        id: "-_PmbEi",
      },
    ],
    filters: {
      readOnlyVisibility: false,
      unreadOnlyVisibility: false,
      currentBookshelfFormat: undefined,
      currentGenreBookshelf: undefined,
    },
  };

  resetAllFilters = () => {
    this.setState({
      filters: {
        readOnlyVisibility: false,
        unreadOnlyVisibility: false,
        currentBookshelfFormat: undefined,
        currentGenreBookshelf: undefined,
      },
    });
  };

  toggleReadFilter = () => {
    this.setState({
      filters: {
        ...this.state.filters,
        readOnlyVisibility: !this.state.filters.readOnlyVisibility,
        unreadOnlyVisibility: false,
      },
    });
  };

  toggleUnreadFilter = () => {
    this.setState({
      filters: {
        ...this.state.filters,
        unreadOnlyVisibility: !this.state.filters.unreadOnlyVisibility,
        readOnlyVisibility: false,
      },
    });
  };

  setBookshelfFormat = () => {
    this.setState({
      filters: {
        ...this.state.filters,
        currentBookshelfFormat: "Paper",
      },
    });
  };

  setGenreBookshelf = () => {
    this.setState({
      filters: {
        ...this.state.filters,
        currentGenreBookshelf: "Fiction",
      },
    });
  };

  readVisibilityToggle = (books, filters) => {
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

  filterByFormat = (books, filters) => {
    if (filters.currentBookshelfFormat !== undefined) {
      let shelf = [];
      Object.values(books).map((book) => {
        if (
          book.format.toLowerCase() ===
          filters.currentBookshelfFormat.toLowerCase()
        ) {
          return shelf.push(book);
        }
      });
      return shelf;
    } else {
      return books;
    }
  };

  filterByGenre = (books, filters) => {
    if (filters.currentGenreBookshelf !== undefined) {
      let shelf = [];
      const genre = filters.currentGenreBookshelf;
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

  checkShelf = (books, filters) => {
    const formattedBookshelf = this.filterByFormat(books, filters);
    const genredBookshelf = this.filterByGenre(formattedBookshelf, filters);
    const readUnreadbooks = this.readVisibilityToggle(genredBookshelf, filters);
    console.log(readUnreadbooks, "RESULT");
  };

  render() {
    return (
      <div>
        <h1>SelectorTesting</h1>
        <button onClick={() => this.toggleReadFilter()}>Toggle read</button>
        <button onClick={() => this.toggleUnreadFilter()}>Toggle unread</button>
        <button onClick={() => this.setBookshelfFormat()}>
          Paper bookshelf
        </button>
        <button onClick={() => this.setGenreBookshelf()}>
          Fiction bookshelf
        </button>
        <button
          onClick={() => this.checkShelf(this.state.books, this.state.filters)}
        >
          Check shelf
        </button>
        <button onClick={() => this.resetAllFilters()}>
          Reset all filters
        </button>
        <button
          onClick={() =>
            console.log(filterAllBooks(this.state.books, this.state.filters))
          }
        >
          Test selector function
        </button>
      </div>
    );
  }
}

export default SelectorTesting;
