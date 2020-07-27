import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentBook } from "../actions/index";

import DetailBook from "../components/DetailBook";
import DeleteBook from "../components/DeleteBook";

class DetailBookPage extends Component {
  componentDidMount() {
    this.props.setCurrentBook(this.props.match.params.id);
  }

  render() {
    const { book } = this.props;

    return (
      <section className="detail-book__body">
        <div className="container">
          <DetailBook
            bookToRender={book}
            identifyFromParams={this.props.match.params.id}
          />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { book: state.books[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { setCurrentBook })(DetailBookPage);
