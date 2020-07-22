import React from "react";
import { connect } from "react-redux";
import { addBook } from "../actions/index";

import BookFormRedux from "../components/BookFormRedux";

const CreateBookPage = (props) => {
  return (
    <div>
      <h1>Add Book</h1>
      <BookFormRedux
        onSubmit={(book) => {
          props.dispatch(addBook(book));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(CreateBookPage);
