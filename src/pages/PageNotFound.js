import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section>
      <div className="container">
        <h1>Error 404: Page Not Found</h1>
        <Link to="/">Go home</Link>
      </div>
    </section>
  );
};

export default PageNotFound;
