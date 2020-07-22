import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>Error 404: Page Not Found</h1>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default PageNotFound;
