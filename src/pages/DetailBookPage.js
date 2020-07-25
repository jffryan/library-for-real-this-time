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
    const {
      title,
      author,
      pageCount,
      type,
      genres,
      hasRead,
      dateRead,
      rating,
    } = book;
    return (
      <section>
        <div className="container">
          <h1>{title}</h1>
          <h5>{author}</h5>
          <p>{pageCount} pages</p>
          <p>{type}</p>
          {/* This makes the genres links work */}
          {/* For some reason when I move this outside of the jsx into a render function it refuses to render */}
          {genres.map((genre, i) => {
            if (i === genres.length - 1) {
              return (
                <span key={genre}>
                  <Link to="/">{genre}</Link>
                </span>
              );
            } else {
              return (
                <span key={genre}>
                  <Link to="/">{genre}</Link>
                  {", "}
                </span>
              );
            }
          })}
          {hasRead && (
            <div>
              <p>Finished {dateRead}</p>
              <p>{rating} stars</p>
            </div>
          )}
          <div>
            <button>
              <Link to={`/books/edit/${this.props.match.params.id}`}>Edit</Link>
            </button>
            <DeleteBook id={this.props.match.params.id} />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { book: state.books[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { setCurrentBook })(DetailBookPage);
