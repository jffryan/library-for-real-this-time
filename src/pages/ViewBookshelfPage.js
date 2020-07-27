import React, { Component } from "react";
import { connect } from "react-redux";

import Bookshelf from "../components/Bookshelf";

import { setBookshelf } from "../actions";
import { bookFormats } from "../config/bookConfig";
import { pullGenreMasterlist, fetchAllBooks } from "../actions/index";

class ViewBookshelfPage extends Component {
  // Initialize the genre list so we can use it to set options
  componentDidMount() {
    this.props.pullGenreMasterlist();
  }

  // Sets the bookshelf in state based on input
  setCurrentBookshelf = (e) => {
    e.preventDefault();
    this.props.setBookshelf(e.target.value, e.target.name);
  };

  // Resets back to default
  resetBookshelf = () => {
    this.props.setBookshelf("");
  };

  render() {
    const { filters, config } = this.props;
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
          <p>Choose by format</p>
          <select
            name="selectBookshelfByFormat"
            onChange={this.setCurrentBookshelf}
            value={filters.currentBookshelf}
          >
            <option></option>
            {bookFormats.map((format) => {
              return (
                <option value={format} key={format}>
                  {format}
                </option>
              );
            })}
          </select>
          <p>Choose by genre</p>
          <select
            name="selectBookshelfByGenre"
            onChange={this.setCurrentBookshelf}
            value={filters.currentBookshelf}
          >
            <option></option>
            {config.genres &&
              config.genres.map((genre) => {
                return (
                  <option value={genre} key={genre}>
                    {genre}
                  </option>
                );
              })}
          </select>
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
  setBookshelf,
  pullGenreMasterlist,
  fetchAllBooks,
})(ViewBookshelfPage);
