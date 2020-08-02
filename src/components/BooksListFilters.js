import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByTitle,
  sortByAuthor,
  sortByPageCount,
  sortByDateRead,
  toggleReadStatusVisibility,
  toggleUnreadStatusVisibility,
  setBookshelfFormat,
  setBookshelfGenre,
  pullGenreMasterlist,
} from "../actions/index";
import { bookFormats } from "../config/bookConfig";

class BooksListFilters extends Component {
  // Lifecycle methods
  componentDidMount() {
    this.props.pullGenreMasterlist();
  }
  componentWillUnmount() {
    this.props.setBookshelfFormat(undefined);
    this.props.setBookshelfGenre(undefined);
    this.props.setTextFilter();
  }
  // Filter methods
  setCurrentBookshelfFormat = (e) => {
    e.preventDefault();

    let format = e.target.value;

    if (typeof format === "string" && format.length === 0) {
      format = undefined;
      this.props.setBookshelfFormat(format);
    } else {
      this.props.setBookshelfFormat(format);
    }
  };
  setCurrentBookshelfGenre = (e) => {
    e.preventDefault();

    let genre = e.target.value;

    if (typeof genre === "string" && genre.length === 0) {
      genre = undefined;
      this.props.setBookshelfGenre(genre);
    } else {
      this.props.setBookshelfGenre(genre);
    }
  };
  setTextFilter = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    const { filters, config } = this.props;
    return (
      <div>
        <input type="text" value={filters.text} onChange={this.setTextFilter} />
        <select
          value={filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "title") {
              this.props.sortByTitle();
            } else if (e.target.value === "author") {
              this.props.sortByAuthor();
            } else if (e.target.value === "pageCount") {
              this.props.sortByPageCount();
            } else if (e.target.value === "dateRead") {
              this.props.sortByDateRead();
            }
          }}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="pageCount">Page Count</option>
          <option value="dateRead">Date Read</option>
        </select>
        <Fragment>
          <label>Only finished books:</label>
          <input
            type="checkbox"
            id="readVisibilityToggle"
            name="readVisibilityToggle"
            onChange={() =>
              this.props.toggleReadStatusVisibility(filters.readOnlyVisibility)
            }
            checked={filters.readOnlyVisibility}
          />
        </Fragment>
        <Fragment>
          <label>Only unfinished books:</label>
          <input
            type="checkbox"
            id="readVisibilityToggle"
            name="readVisibilityToggle"
            onChange={() =>
              this.props.toggleUnreadStatusVisibility(
                filters.unreadOnlyVisibility
              )
            }
            checked={filters.unreadOnlyVisibility}
          />
        </Fragment>
        <Fragment>
          <p>Choose by format</p>
          <select
            name="selectBookshelfByFormat"
            onChange={this.setCurrentBookshelfFormat}
            value={filters.currentBookshelfFormat}
          >
            <option value={null}></option>
            {bookFormats.map((format) => {
              return (
                <option value={format} key={format}>
                  {format}
                </option>
              );
            })}
          </select>
        </Fragment>
        <Fragment>
          <p>Choose by genre</p>
          <select
            name="selectBookshelfByGenre"
            onChange={this.setCurrentBookshelfGenre}
            value={filters.currentBookshelfGenre}
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
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    config: { ...state.config },
  };
};

export default connect(mapStateToProps, {
  setTextFilter,
  setBookshelfFormat,
  setBookshelfGenre,
  toggleReadStatusVisibility,
  toggleUnreadStatusVisibility,
  pullGenreMasterlist,
  sortByTitle,
  sortByAuthor,
  sortByPageCount,
  sortByDateRead,
})(BooksListFilters);
