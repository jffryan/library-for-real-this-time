import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { setCurrentBook, editBook } from "../actions/index";

import BookFormRedux from "../components/BookFormRedux";

class EditBookPage extends Component {
  componentDidMount() {
    this.props.setCurrentBook(this.props.match.params.id);
  }
  onSubmit = ({ formValues, resetForm }) => {
    this.props.editBook(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.book) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>Edit Book</h1>
        <BookFormRedux
          initialValues={_.pick(
            this.props.book,
            "title",
            "author",
            "pageCount"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { book: state.books[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { setCurrentBook, editBook })(
  EditBookPage
);
