import React, { Component } from "react";
import { connect } from "react-redux";

import Book from "./Book";
import { getVisibleBooks } from "../selectors/book";
import { fetchAllBooks } from "../actions";

// *** Right now the only difference between a Library comopnent and a BookShelf component is that Bookshelf components
// are better, smarter, and can conditionally render contents. Probably should be merged at some point. ***

class Library extends Component {
  componentDidMount() {
    this.props.fetchAllBooks();
  }

  renderList() {
    return this.props.books.map((book) => {
      return <Book key={book.id} className={"library__book"} {...book} />;
    });
  }

  render() {
    return <div className="library">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    books: getVisibleBooks(Object.values(state.books), state.filters),
  };
};

export default connect(mapStateToProps, { fetchAllBooks })(Library);
