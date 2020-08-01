import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllBooks } from "../actions/index";

class StatisticsPage extends Component {
  componentDidMount() {
    this.props.fetchAllBooks();
  }

  generatePageCountTotal = (books) => {
    let total = 0;
    let bookArray = Object.values(books);
    bookArray.map((book) => {
      return (total = book.pageCount + total);
    });
    return total;
  };

  render() {
    if (Object.keys(this.props.books).length < 1) {
      return (
        <section>
          <div className="container">
            <h1>Statistics Page</h1>
            <p>Loading...</p>
          </div>
        </section>
      );
    }
    return (
      <section>
        <div className="container">
          <h1>Statistics Page</h1>
          <p>
            There are currently {Object.keys(this.props.books).length} books in
            your library
          </p>
          <p>
            Your library is {this.generatePageCountTotal(this.props.books)}{" "}
            pages long
          </p>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: { ...state.books },
  };
};

export default connect(mapStateToProps, { fetchAllBooks })(StatisticsPage);
