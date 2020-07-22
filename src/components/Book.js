import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Book = (props) => {
  const { title, author, pageCount, id } = props;
  return (
    <div>
      <Link to={`books/view/${id}`}>
        <h3>{title}</h3>
      </Link>
      <h5>{author}</h5>
      <p>{pageCount} pages</p>
    </div>
  );
};

export default connect()(Book);
