import React, { Component } from "react";
import { connect } from "react-redux";

import Bookshelf from "../components/Bookshelf";

import { setBookshelf } from "../actions";
import { bookTypes } from "../config/bookConfig";

class ViewBookshelfPage extends Component {
  setCurrentBookshelf = (e) => {
    e.preventDefault();

    this.props.setBookshelf(e.target.value);
  };

  render() {
    const { filters } = this.props;
    return (
      <section>
        <div className="container">
          <h1>Bookshelves</h1>
          {!filters.currentBookshelf && <p>Choose by type</p>}
          <select name="selectBookshelf" onChange={this.setCurrentBookshelf}>
            <option></option>
            {bookTypes.map((type) => {
              return (
                <option value={type} key={type}>
                  {type}
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
    filters: { ...state.filters },
  };
};

export default connect(mapStateToProps, { setBookshelf })(ViewBookshelfPage);
