import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Book = (props) => {
  const { title, author, id } = props;
  return (
    <div className={props.className || null}>
      <Link to={`books/view/${id}`}>
        <h3>{title}</h3>
      </Link>
      <h5>{author}</h5>
    </div>
  );
};

export default connect()(Book);
