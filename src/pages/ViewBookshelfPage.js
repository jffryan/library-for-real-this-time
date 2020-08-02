import React, { Component } from "react";
import { connect } from "react-redux";

import Bookshelf from "../components/Bookshelf";
import BooksListFilters from "../components/BooksListFilters";

import {
  pullGenreMasterlist,
  setBookshelfFormat,
  fetchAllBooks,
} from "../actions/index";

class ViewBookshelfPage extends Component {
  render() {
    const { filters } = this.props;
    return (
      <section>
        <div className="container">
          {!filters.currentBookshelf ? (
            <h1>Bookshelves</h1>
          ) : (
            <h1 onClick={this.resetBookshelf} style={{ cursor: "pointer" }}>
              &larr; Back to bookshelf select
            </h1>
          )}

          <BooksListFilters />
          <Bookshelf currentBookshelf={filters.currentBookshelf} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: { ...state.books },
    filters: { ...state.filters },
    config: { ...state.config },
  };
};

export default connect(mapStateToProps, {
  pullGenreMasterlist,
  fetchAllBooks,
  setBookshelfFormat,
})(ViewBookshelfPage);
