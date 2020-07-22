import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook } from "../actions/index";

class BookForm extends Component {
  constructor(props) {
    super(props);
    // const { book } = props;
    this.state = {
      books: [],
      title: "",
      author: "",
      pageCount: "",
      error: undefined,
    };
  }
  componentDidMount() {
    console.log(this.state);
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onAuthorChange = (e) => {
    const author = e.target.value;
    this.setState(() => ({ author }));
  };
  onPageCountChange = (e) => {
    const pageCount = e.target.value;
    if (pageCount.match(/^\d*$/)) {
      this.setState(() => ({ pageCount }));
    }
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.author || !this.state.pageCount) {
      const errorMessage = "All fields are required.";
      this.setState(() => ({ error: errorMessage }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        title: this.state.title,
        author: this.state.author,
        pageCount: this.state.pageCount,
        id: toString(Math.floor(100000 + Math.random() * 900000)),
      });
    }
  };
  render() {
    const {
      state,
      onTitleChange,
      onAuthorChange,
      onPageCountChange,
      onSubmit,
    } = this;
    return (
      <div>
        <h2>Book Form</h2>
        {state.error && <p>{state.error}</p>}
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              autoFocus
              value={state.title}
              onChange={onTitleChange}
            />
          </div>
          <div>
            <label htmlFor="author">Author: </label>
            <input
              type="text"
              placeholder="Author"
              name="author"
              value={state.author}
              onChange={onAuthorChange}
            />
          </div>
          <div>
            <label htmlFor="pageCount">Page Count: </label>
            <input
              type="text"
              placeholder="Page Count"
              name="pageCount"
              value={state.pageCount}
              onChange={onPageCountChange}
            />
          </div>
          <div>
            <button>Add Book</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log("STATE", state);
  console.log("PROPS", props);
  return {
    books: state.books,
  };
};
export default connect(mapStateToProps)(BookForm);
