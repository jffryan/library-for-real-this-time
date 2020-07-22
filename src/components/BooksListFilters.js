import React, { useMemo } from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByTitle,
  sortByAuthor,
  sortByPageCount,
} from "../actions/index";

const BooksListFilters = (props) => {
  const { filters, dispatch } = props;
  const filterText = useMemo(
    () => (e) => dispatch(setTextFilter(e.target.value)),
    [dispatch]
  );
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(BooksListFilters);
