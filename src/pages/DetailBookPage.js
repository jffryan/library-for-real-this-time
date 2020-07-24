import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentBook } from "../actions/index";

import DeleteBook from "../components/DeleteBook";

class DetailBookPage extends Component {
  componentDidMount() {
    this.props.setCurrentBook(this.props.match.params.id);
  }
  render() {
    const { book } = this.props;
    if (!book) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>{book.title}</h1>
        <h5>{book.author}</h5>
        <button>
          <Link to={`/books/edit/${this.props.match.params.id}`}>Edit</Link>
        </button>
        <DeleteBook id={this.props.match.params.id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { book: state.books[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { setCurrentBook })(DetailBookPage);
