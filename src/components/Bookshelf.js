import React, { Component } from "react";
import { connect } from "react-redux";

import Book from "../components/Book";

import { fetchAllBooks } from "../actions/index";
import { filterAllBooks } from "../selectors/book";

class Bookshelf extends Component {
  componentDidMount() {
    this.props.fetchAllBooks();
  }

  renderBookshelfBooks = () => {
    return this.props.books.map((book) => {
      return <Book key={book.id} className={"library__book"} {...book} />;
    });
  };

  render() {
    if (!this.props.books) {
      return (
        <div>
          <div>Loading...</div>
        </div>
      );
    } else if (
      !this.props.filters.currentBookshelfGenre &&
      !this.props.filters.currentBookshelfFormat
    ) {
      return (
        <div>
          <p>Select a bookshelf to continue</p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Bookshelf</h2>
          <div className="library">{this.renderBookshelfBooks()}</div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    books: filterAllBooks(Object.values(state.books), state.filters),
  };
};

export default connect(mapStateToProps, { fetchAllBooks })(Bookshelf);
