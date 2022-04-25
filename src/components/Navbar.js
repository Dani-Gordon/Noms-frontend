import React from 'react';
import { Link } from 'react-router-dom';
import { getLoggedInUserId } from '../lib/authentication';
import { removeToken, removeUserId } from '../lib/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const userId = getLoggedInUserId();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    console.log(userId);
    removeUserId();
    navigate('/');
    console.log('logged out');
  };

  return (
    <header>
      <div className="navigator">
        <div className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/recipebook" className="nav-link">
            Recipe Book
          </Link>
        </div>
      </div>
      {getLoggedInUserId() ? (
        <div className="navigator">
          <div className="nav-link">
            <Link to="/createrecipe" className="nav-link">
              Add Recipe
            </Link>
            <Link to="/recipebox" className="nav-link">
              Noms Box
            </Link>
            <Link to="/logout" id="logout-link" onClick={handleLogout}>
              Sign Out
            </Link>
          </div>
        </div>
      ) : (
        <div className="navigator">
          <div className="nav-link">
            <Link to="/register" className="nav-link">
              Sign Up
            </Link>
            <Link to="/login" className="nav-link">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
