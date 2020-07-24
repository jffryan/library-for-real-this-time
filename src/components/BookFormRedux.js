import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addBook } from "../actions/index";

// REGEX to ensure that pageCount will always be numbers even though it's a text field
const normalizePageCount = (value) => {
  if (!value) {
    return value;
  } else {
    return parseInt(value.match(/^\d*$/), 10);
  }
};

// Component starts here
class BookFormRedux extends Component {
  // Conditional logic to check if the form needs to display error messages to users
  // Error and touched destructured from meta
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <p>{error}</p>
        </div>
      );
    }
  }

  // Clears form values
  // ***************THIS DOESN'T WORK WITH EDIT AND I SHOULD FIGURE OUT HOW TO FIX
  resetForm = () => {
    this.props.reset();
    this.props.untouch();
  };

  // FormRedux function to make sure our fields are rendering text inputs correctly
  // Arrow function to bind 'this' context
  renderTextInput = ({ input, label, meta }) => {
    return (
      <div>
        <div>{this.renderError(meta)}</div>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit({ formValues, resetForm: this.resetForm });
  };

  render() {
    const { renderTextInput, onSubmit } = this;
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(onSubmit)}>
          <Field name="title" component={renderTextInput} label="Title: " />
          <Field name="author" component={renderTextInput} label="Author: " />
          <Field
            name="pageCount"
            component={renderTextInput}
            label="Page Count: "
            normalize={normalizePageCount}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

// Validate data (different from normalizing data). Mostly just making sure things exist

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Title missing";
  }
  if (!formValues.author) {
    errors.author =
      "Please enter an author. For books without an author, use a dash to continue.";
  }
  if (!formValues.pageCount) {
    errors.pageCount = "Enter page count";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "bookForm",
  validate: validate,
})(BookFormRedux);

export default connect(null)(formWrapped);
