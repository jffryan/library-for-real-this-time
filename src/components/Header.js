import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="primary-nav">
      <div className="container">
        <Link to="/">
          <h1>Library</h1>
        </Link>
        <div className="primary-nav__list">
          <NavLink to="/books/create" activeClassName="is-active">
            Create
          </NavLink>
          <NavLink to="/library" activeClassName="is-active">
            Bookshelves
          </NavLink>
          <NavLink to="/statistics" activeClassName="is-active">
            Statistics
          </NavLink>
          <NavLink to="/help" activeClassName="is-active">
            Help
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
