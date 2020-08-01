import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import DeleteBook from "../components/DeleteBook";

import { setBookshelf } from "../actions/index";

// *** THIS COMPONENT EXPECTS A PROP CALLED "identifyFromParams" AND WILL CRASH WITHOUT IT ***
class DetailBook extends Component {
  navigateToBookshelf = (genre) => {
    this.props.setBookshelf(genre.genre, "selectBookshelfByGenre");
  };
  // *** Should be the same function as above but I'm lazy for now ***
  navigateToFormatBookshelf = (format) => {
    this.props.setBookshelf(format.format, "selectBookshelfByFormat");
  };

  render() {
    const { bookToRender: book, identifyFromParams } = this.props;
    if (!book) {
      return <div>Loading...</div>;
    }
    const {
      title,
      author,
      pageCount,
      format,
      genres,
      hasRead,
      dateRead,
      rating,
    } = book;

    // Need to fix the links to the library page since I changed how the bookshelf component figures out what to render

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
                  onClick={() => this.navigateToFormatBookshelf({ format })}
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
                        onClick={() => this.navigateToBookshelf({ genre })}
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
                        onClick={() => this.navigateToBookshelf({ genre })}
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
                <p>Finished: {dateRead}</p>
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

export default connect(null, { setBookshelf })(DetailBook);
