import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentBook, removeBook } from "../actions";

class DeleteBook extends Component {
  componentDidMount() {}
  deleteBook = () => {
    this.props.removeBook(this.props.id);
  };

  render() {
    return (
      <div>
        <button onClick={this.deleteBook} className="button button-warning">
          Remove
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books[ownProps.id],
  };
};

export default connect(mapStateToProps, { setCurrentBook, removeBook })(
  DeleteBook
);
