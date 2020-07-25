import React from "react";

import Library from "../components/Library";
import BooksListFilters from "../components/BooksListFilters";

const LibraryHomePage = () => {
  return (
    <section>
      <main className="home-hero">
        <div className="container">
          <h1 className="home_title">Library Home</h1>
          <p className="home_flourish">
            “What really knocks me out is a book that, when you're all done
            reading it, you wish the author that wrote it was a terrific friend
            of yours and you could call him up on the phone whenever you felt
            like it. That doesn't happen much, though.”{" "}
          </p>
        </div>
      </main>
      <div className="container">
        <BooksListFilters />
        <Library />
      </div>
    </section>
  );
};

export default LibraryHomePage;
