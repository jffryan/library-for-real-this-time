import React, { Component } from "react";
import { connect } from "react-redux";

import Book from "./Book";
import { getVisibleBooks } from "../selectors/book";
import { fetchAllBooks } from "../actions";

class Bookshelf extends Component {
  componentDidMount() {
    this.props.fetchAllBooks();
  }
  renderList() {
    return this.props.books.map((book) => {
      return <Book key={book.id} {...book} />;
    });
  }

  render() {
    return (
      <div>
        <h1>Bookshelf</h1>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: getVisibleBooks(Object.values(state.books), state.filters),
  };
};

export default connect(mapStateToProps, { fetchAllBooks })(Bookshelf);
