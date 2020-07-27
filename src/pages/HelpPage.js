import React, { Component } from "react";
import { connect } from "react-redux";
import {
  reduxGenerateGenreMasterList,
  fetchAllBooks,
  pullGenreMasterlist,
} from "../actions/index";

class HelpPage extends Component {
  componentDidMount() {
    this.props.fetchAllBooks();
  }

  generateListFunc = () => {
    const list = this.props.reduxGenerateGenreMasterList(this.props.books);
    return list;
  };

  testGenreList = () => {
    this.props.pullGenreMasterlist();
  };

  render() {
    const { generateListFunc, testGenreList, props } = this;
    const { config } = props;
    return (
      <main>
        <div className="container">
          <h1>Help Desk</h1>
          <button onClick={generateListFunc}>Generate Master List</button>
          <button onClick={testGenreList}>Test Master List</button>
          {config.genres &&
            config.genres.map((genre) => {
              return <p key={genre}>{genre}</p>;
            })}
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: { ...state.books },
    config: { ...state.config },
  };
};

export default connect(mapStateToProps, {
  reduxGenerateGenreMasterList,
  fetchAllBooks,
  pullGenreMasterlist,
})(HelpPage);
