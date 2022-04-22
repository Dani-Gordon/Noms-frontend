import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navigator">
        <div className="nav">
          {/* <div className="> */}
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/recipebook" className="nav-link">
            Recipe Book
          </Link>
          <Link to="/createrecipe" className="nav-link">
            Add Recipe
          </Link>
          <Link to="/recipebox" className="nav-link">
            Recipe Box
          </Link>
        </div>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
