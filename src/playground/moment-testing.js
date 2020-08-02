import React, { Component } from "react";
import moment from "moment";

class MomentTesting extends Component {
  state = {
    moments: [],
    books: [
      {
        title: "Neuromancer",
        author: "William Gibson",
        pageCount: 271,
        format: "Paper",
        genres: ["Fiction", "Sci-Fi"],
        dateRead: null,
        id: "6c925a11-f2bf-4f02-bf5d-243e19eda9a1",
      },
      {
        title: "Hegemony Or Survival",
        author: "Noam Chomsky",
        pageCount: 301,
        format: "Paper",
        genres: ["Theory", "Politics", "American Foreign Policy"],
        dateRead: null,
        id: "c0888b51-0cdf-42dd-a0cf-e11098ce5fc7",
      },
      {
        title: "The Shock Doctrine",
        author: "Naomi Klein",
        pageCount: 701,
        format: "Paper",
        genres: ["History", "Economics", "Politics", "American Foreign Policy"],
        hasRead: true,
        dateRead: "2020-04-01T05:00:00.000Z",
        rating: "5",
        id: "2843c0d3-0834-46e3-ae4f-30bf8eec8c4b",
      },
      {
        title: "All Quiet on the Western Front",
        author: "Erich Remarque",
        pageCount: 296,
        format: "Paper",
        genres: ["Fiction", "Modernism"],
        hasRead: true,
        dateRead: "2019-06-24T05:00:00.000Z",
        rating: "5",
        id: "ff003257-d114-4cb4-8385-b883ee088c85",
      },
      {
        title: "Never Split the Difference",
        author: "Chris Voss",
        pageCount: 288,
        format: "Audio",
        genres: ["Business", "Negotiations"],
        hasRead: true,
        dateRead: "2019-06-29T05:00:00.000Z",
        rating: "5",
        id: "d0ea7a9d-dd27-46fe-8069-4599abf53ff4",
      },
      {
        title: "Secrets of Closing the Sale",
        author: "Zig Ziglar",
        pageCount: 432,
        format: "Pirated",
        genres: ["Business", "Sales"],
        hasRead: true,
        dateRead: "2019-06-27T05:00:00.000Z",
        rating: "4.5",
        id: "aeaba9e3-9ad8-4488-9298-8fa204d266ca",
      },
      {
        title: "Child Made of Sand",
        author: "Thomas Lux",
        pageCount: 85,
        format: "Ebook",
        genres: ["Poetry"],
        dateRead: null,
        id: "48f7830a-d4cb-45e2-a8fd-b13d2482d814",
      },
    ],
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

  processBooksToMoments = (books) => {
    return books.map((book) => {
      let processedDateToMoment = moment(book.dateRead);

      return { ...book, dateRead: processedDateToMoment };
    });
  };

  sortBooks = (books) => {
    const processedBooks = this.processBooksToMoments(books);

    const sortedBooks = processedBooks.sort((a, b) => {
      if (a.dateRead.isBefore(b.dateRead)) {
        console.log(a.title, b.title, "A");
      } else if (b.dateRead.isBefore(a.dateRead)) {
        console.log(b.title, a.title, "B");
      }
    });

    console.log(sortedBooks);
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
        <button onClick={() => this.sortBooks(this.state.books)}>
          Sort books
        </button>
      </div>
    );
  }
}

export default MomentTesting;
