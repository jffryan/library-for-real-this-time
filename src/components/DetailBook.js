import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import DeleteBook from "../components/DeleteBook";

import { setBookshelfFormat, setBookshelfGenre } from "../actions/index";

// *** THIS COMPONENT EXPECTS A PROP CALLED "identifyFromParams" AND WILL CRASH WITHOUT IT ***
class DetailBook extends Component {
  navigateToBookshelfGenre = (genre) => {
    this.props.setBookshelfGenre(genre.genre);
  };
  navigateToBookshelfFormat = (format) => {
    this.props.setBookshelfFormat(format.format);
  };

  render() {
    const { bookToRender: book, identifyFromParams } = this.props;
    if (!book) {
      return <div>Loading...</div>;
    }
    const { title, author, pageCount, format, genres, hasRead, rating } = book;

    const dateRead = moment(book.dateRead);

    return (
      <div>
        <div className="detail-book-card">
          <div className="detail-book__cover">
            <img
              src="https://via.placeholder.com/320x480"
              className="book__cover"
            />
          </div>
          <div className="detail-book__text">
            <h1 className="book__title">{title}</h1>
            <h2>{author}</h2>

            <h3>About this edition</h3>
            <p>Length: {pageCount} pages</p>
            <p>
              Format:{" "}
              <span>
                <Link
                  to="/library"
                  onClick={() => this.navigateToBookshelfFormat({ format })}
                >
                  {format}
                </Link>
              </span>
            </p>
            {/* This makes the genres links work */}
            {/* For some reason when I move this outside of the jsx into a render function it refuses to render */}
            <div className="book__content-genres-container">
              Genres:{" "}
              {genres.map((genre, i) => {
                if (i === genres.length - 1) {
                  return (
                    <span key={genre}>
                      <Link
                        to="/library"
                        onClick={() => this.navigateToBookshelfGenre({ genre })}
                      >
                        {genre}
                      </Link>
                    </span>
                  );
                } else {
                  return (
                    <span key={genre}>
                      <Link
                        to="/library"
                        onClick={() => this.navigateToBookshelfGenre({ genre })}
                      >
                        {genre}
                      </Link>
                      {", "}
                    </span>
                  );
                }
              })}
            </div>

            {hasRead && (
              <div>
                <h3>Personal statistics</h3>
                <p>Finished: {dateRead.format("MMM DD, YYYY")}</p>
                <p>Rating: {rating} stars</p>
              </div>
            )}
            <div className="detail-book__button-container">
              <Link
                to={`/books/edit/${identifyFromParams}`}
                className="button button-primary"
              >
                Edit
              </Link>
              <DeleteBook id={identifyFromParams} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { setBookshelfFormat, setBookshelfGenre })(
  DetailBook
);
