import React from "react";

import Bookshelf from "../components/Bookshelf";
import BooksListFilters from "../components/BooksListFilters";

const LibraryHomePage = () => {
  return (
    <div>
      <h1>Library Home</h1>
      <BooksListFilters />
      <Bookshelf />
    </div>
  );
};

export default LibraryHomePage;
