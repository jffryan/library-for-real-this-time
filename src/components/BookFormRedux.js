import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, FieldArray, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

import { bookFormats } from "../config/bookConfig";

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
  // *** It kinda sucks that this lives here and is implemented this way ***
  // *** Works with create, but causes weird form behavior when editing books ***
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

  renderFormatSelect = ({ input, label, meta }) => {
    return (
      <div>
        <div>{this.renderError(meta)}</div>
        <label>{label}</label>
        <select {...input}>
          <option></option>
          {bookFormats.map((format) => {
            return (
              <option value={format} key={format}>
                {format}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  // *** This would be the tags component/Field but it's not working ***
  // renderGenreTags = ({ input, label, meta }) => {
  //   return (
  //     <div>
  //       <div>{this.renderError(meta)}</div>
  //       <div>{label}</div>
  //       {/* InputTag component goes here */}
  //     </div>
  //   );
  // };
  // *** End junk code---------------------------------------------- ***

  // *** Currently doesn't validate ***
  renderGenreInput = ({ fields, label, meta }) => {
    return (
      <div>
        <div>{this.renderError(meta)}</div>
        <label htmlFor={label}>{label}</label>
        <button type="button" onClick={() => fields.push()}>
          Add genre
        </button>
        {fields.map((genre, index) => {
          return (
            <div key={index}>
              <Field
                name={genre}
                type="text"
                component={this.renderTextInput}
                label={`Genre ${index + 1}`}
              />
              <button type="button" onClick={() => fields.remove(index)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  // *** This is a cheesy way to fix this, but it works for now. Flag for future fix ***
  onSubmit = (formValues) => {
    // update formValues before going off to the races
    const processedDate = moment(formValues.dateRead, "MM-DD-YY");
    const processedId = uuidv4();

    const formValuesProcessed = {
      ...formValues,
      dateRead: processedDate,
      id: processedId,
    };

    this.props.onSubmit({
      formValues: formValuesProcessed,
      resetForm: this.resetForm,
    });
  };

  render() {
    const {
      renderTextInput,
      renderFormatSelect,
      renderGenreInput,
      onSubmit,
    } = this;
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
          <Field
            name="format"
            component={renderFormatSelect}
            label="Format: "
          ></Field>
          <FieldArray
            name="genres"
            component={renderGenreInput}
            label="Genre: "
          />
          <div>
            <label htmlFor="hasRead">Read?</label>
            <div>
              <Field
                name="hasRead"
                id="hasRead"
                component="input"
                type="checkbox"
              />
            </div>
          </div>
          {/* This should be some kind of datepicker and not just an uncontrolled text input */}
          {this.props.hasReadValue && (
            <div>
              <Field
                name="dateRead"
                component={renderTextInput}
                label="Date Read: "
              />
              {/* This should be gated from 1 - 5 stars with half increments */}
              <Field
                name="rating"
                component={renderTextInput}
                label="Rating: "
              />
            </div>
          )}
          <button>Submit</button>
          <Link to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

// Validate data (different from normalizing data). Mostly just making sure things exist
// Program will currently throw an error if any field is missing, because all other components expect every book.value to be true

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
  if (!formValues.format) {
    errors.format = "What kind of book?";
  }
  if (!formValues.genres || formValues.genres.length < 1) {
    errors.genres = "Must include at least one genre";
  }
  return errors;
};

// Messy multi-layer component wrapping

const formWrapped = reduxForm({
  form: "bookForm",
  validate: validate,
})(BookFormRedux);

const selector = formValueSelector("bookForm");
const formWrappedSelector = connect((state) => {
  const hasReadValue = selector(state, "hasRead");
  const hasGenresProperty = selector(state, "genres");
  return {
    hasReadValue,
    hasGenresProperty,
  };
})(formWrapped);

export default connect(null)(formWrappedSelector);
