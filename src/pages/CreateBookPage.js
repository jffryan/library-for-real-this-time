import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook } from "../actions/index";

import BookFormRedux from "../components/BookFormRedux";

class CreateBookPage extends Component {
  state = {
    formSubmit: false,
  };

  componentDidMount() {}

  componentWillUnmount() {
    if (this.resetTimer) {
      clearTimeout(this.resetTimer);
    }
  }

  // Resets submission message
  resetTimer = () => {
    if (this.state.formSubmit === true) {
      setTimeout(() => {
        this.setState({
          formSubmit: false,
        });
      }, 2000);
    }
  };
  // Pass this down as a prop so the form knows what kind of form it needs to be
  onSubmit = ({ formValues, resetForm }) => {
    this.props.addBook(formValues).then(() => {
      this.setState({ formSubmit: true });
      this.resetTimer();
      resetForm();
    });
  };

  render() {
    return (
      <section>
        <div className="container">
          <h1>Add Book</h1>
          {this.state.formSubmit && <p>Book added successfully</p>}
          <BookFormRedux onSubmit={this.onSubmit} />
        </div>
      </section>
    );
  }
}

export default connect(null, { addBook })(CreateBookPage);
