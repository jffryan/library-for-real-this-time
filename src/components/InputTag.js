import React, { Component } from "react";

// *** Currently this component doesn't play well with BookFormRedux/Redux Form ***
// *** Somehow we need to pass in the input & spit out the values, probably involving some kind of mapStateToProps ***
// *** Also need to figure out some way to store a masterlist of generated tags to avoid duplicated across different instances ***

class InputTag extends Component {
  constructor() {
    super();
    this.state = {
      tags: [],
    };
  }

  //   Basically our mini-onSubmit
  inputKeyDown = (e) => {
    //   Store value
    const value = e.target.value;
    //   If enter key and value exist, store it in state (eventually redux)
    if (e.key === "Enter" && value) {
      //   Check if tag already exists... might eventually need to do this internally & against the database?
      if (
        this.state.tags.find((tag) => tag.toLowerCase() === value.toLowerCase())
      ) {
        return;
      }
      this.setState({ tags: [...this.state.tags, value] });
      this.tagInput.value = null;
    } else if (e.key === "Backspace" && !value) {
      // If the user clicks backspace when there's no value in the field, it will remove the last value
      this.removeTag(this.state.tags.length - 1);
    }
  };

  renderTagList = (tags) => {
    return tags.map((tag, i) => {
      return (
        <li key={tag}>
          {tag}
          <button
            onClick={() => {
              this.removeTag(i);
            }}
          >
            +
          </button>
        </li>
      );
    });
  };

  removeTag = (i) => {
    // *** Need a better way to do this, current implementation breaks if you ever reorder or sort the tags ***
    const newTags = [...this.state.tags];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  };

  render() {
    const { tags } = this.state;

    return (
      <div className="input-tag">
        <ul className="input-tag__tags">
          {this.renderTagList(tags)}
          <li className="input-tag__tags__input">
            <input
              type="text"
              onKeyDown={this.inputKeyDown}
              ref={(c) => {
                this.tagInput = c;
              }}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default InputTag;
