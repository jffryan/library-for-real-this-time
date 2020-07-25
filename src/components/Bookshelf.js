import React, { Component } from "react";
import { connect } from "react-redux";

import Book from "../components/Book";

import { fetchAllBooks, setBookshelf } from "../actions/index";
import { getBookshelfBooks } from "../selectors/book";

class Bookshelf extends Component {
  componentDidMount() {
    this.props.fetchAllBooks();
  }
  componentWillUnmount() {
    this.props.setBookshelf("");
  }

  renderBookshelfBooks = () => {
    if (this.props.currentBookshelf) {
      return (
        <div>
          {getBookshelfBooks(this.props.books, this.props.filters).map(
            (book) => {
              return <Book key={book.id} {...book} />;
            }
          )}
        </div>
      );
    } else {
      return;
    }
  };

  render() {
    return (
      <div>
        <h2>{this.props.currentBookshelf}</h2>
        {this.renderBookshelfBooks()}
      </div>
    );
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
