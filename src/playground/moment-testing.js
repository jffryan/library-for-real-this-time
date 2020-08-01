import React, { Component } from "react";
import moment from "moment";

class MomentTesting extends Component {
  state = {
    moments: [],
  };

  componentDidMount() {}

  generateMoment = () => {
    console.log(moment().format());
  };

  testMoment = (date) => {
    return console.log(moment(date, "MM-DD-YY").format());
  };

  compareMoments = (inputOne, inputTwo, inputThree) => {
    let momentOne = moment(inputOne, "MM-DD-YY");
    let momentTwo = moment(inputTwo, "MM-DD-YY");
    let momentThree = moment(inputThree, "MM-DD-YY");

    let moments = [momentOne, momentTwo, momentThree];

    let sortedMoments = moments.sort((a, b) => a - b);
    return sortedMoments;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const inputAsMoment = moment(e.target.elements.date.value, "MM-DD-YY");

    this.setState((prevState) => {
      return {
        moments: prevState.moments.concat(inputAsMoment),
      };
    });
  };

  renderMomentsList = (moments) => {
    let sortedMoments = moments.sort((a, b) => a - b);
    return sortedMoments.map((moment) => {
      let renderMoment = moment.format("MMMM DD, YYYY");
      return <p key={renderMoment}>{renderMoment}</p>;
    });
  };

  render() {
    return (
      <div>
        <h1>Moment Testing</h1>
        <button
          onClick={() =>
            console.log(this.compareMoments("4/26/16", "2/2/17", "9/19/12"))
          }
        >
          Compare
        </button>
        <form onSubmit={this.handleSubmit}>
          <label>Date</label>
          <input type="text" name="date" />
          <button>Submit</button>
        </form>
        <div>{this.renderMomentsList(this.state.moments)}</div>
      </div>
    );
  }
}

export default MomentTesting;
