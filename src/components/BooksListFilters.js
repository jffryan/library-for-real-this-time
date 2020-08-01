import React, { Component, useMemo, Fragment } from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByTitle,
  sortByAuthor,
  sortByPageCount,
  toggleReadStatusVisibility,
  toggleUnreadStatusVisibility,
  setBookshelfFormat,
  setBookshelfGenre,
  pullGenreMasterlist,
} from "../actions/index";
import { bookFormats } from "../config/bookConfig";

class BooksListFilters extends Component {
  componentDidMount() {
    this.props.pullGenreMasterlist();
  }
  componentWillUnmount() {
    this.props.setBookshelfFormat(undefined);
    this.props.setBookshelfGenre(undefined);
  }

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

  render() {
    const { filters, dispatch, config } = this.props;
    const filterText = (e) => this.props.setTextFilter(e.target.value);
    return (
      <div>
        <input type="text" value={filters.text} onChange={filterText} />
        <select
          value={filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "title") {
              dispatch(sortByTitle());
            } else if (e.target.value === "author") {
              dispatch(sortByAuthor());
            } else if (e.target.value === "pageCount") {
              dispatch(sortByPageCount());
            }
          }}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="pageCount">Page Count</option>
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
            value={filters.CurrentBookshelfGenre}
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
})(BooksListFilters);

// ADD UNFINISHED BOOKS, TEXT FILTER, AND SORT
