import React, { Component } from "react";
import { connect } from "react-redux";

import Book from "../components/Book";

import { fetchAllBooks, setBookshelf } from "../actions/index";
import { getBookshelfByFormat, getBookshelfByGenre } from "../selectors/book";

class Bookshelf extends Component {
  componentDidMount() {
    this.props.fetchAllBooks();
  }
  componentWillUnmount() {
    this.props.setBookshelf("", "");
  }

  renderBookshelfBooks = () => {
    // Do we have a filter set up at all? If yes, continue, otherwise be blank
    if (this.props.currentBookshelf) {
      // Format bookshelves
      if (this.props.filters.filterSource === "selectBookshelfByFormat") {
        return (
          <div className="library">
            {getBookshelfByFormat(this.props.books, this.props.filters).map(
              (book) => {
                return (
                  <Book key={book.id} className={"library__book"} {...book} />
                );
              }
            )}
          </div>
        );
        // Genre bookshelves
      } else if (this.props.filters.filterSource === "selectBookshelfByGenre") {
        return (
          <div className="library">
            {getBookshelfByGenre(
              this.props.books,
              this.props.filters.currentBookshelf
            ).map((book) => {
              return (
                <Book key={book.id} className={"library__book"} {...book} />
              );
            })}
          </div>
        );
      } else {
        return (
          <div>
            <h3>You gunked up!!</h3>
          </div>
        );
      }
    }
  };

  // *** This currently crashes if you try to pass it in pre-existing data and I think it's because the way I coded the props vs state ***
  render() {
    const { currentBookshelf, filterSource } = this.props.filters;
    if (!currentBookshelf && !filterSource) {
      return (
        <div>
          <p>Select a bookshelf to continue</p>
        </div>
      );
    } else if (!this.props.books) {
      return (
        <div>
          <h2>{this.props.currentBookshelf.genre}</h2>
          <div>Loading...</div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>{this.props.currentBookshelf}</h2>
          <div>{this.renderBookshelfBooks()}</div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    filters: { ...state.filters },
    books: { ...state.books },
  };
};

export default connect(mapStateToProps, { fetchAllBooks, setBookshelf })(
  Bookshelf
);
