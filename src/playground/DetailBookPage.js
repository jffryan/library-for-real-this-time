import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBook } from "../actions";
import { getCurrentBook } from "../selectors/book";

export default (props) => {
  const dispatch = useDispatch();
  const { book } = useSelector((state) => ({ book: getCurrentBook(state) }));
  useEffect(() => {
    dispatch(setCurrentBook({ id: props.match.params.id }));
  }, []);
  const { title, author, pageCount } = book;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{pageCount} pages</p>
    </div>
  );
};
