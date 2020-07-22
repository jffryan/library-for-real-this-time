import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h1>Library</h1>
      </Link>
      <div>
        <NavLink to="/books/create" activeClassName="is-active">
          Create
        </NavLink>
        <NavLink to="/library" activeClassName="is-active">
          Library
        </NavLink>
        <NavLink to="/statistics" activeClassName="is-active">
          Statistics
        </NavLink>
        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
