import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="app-header">
      <div className="main-title">
        <h1>Math Magicians</h1>
      </div>
      <div className="main-links">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/quote"> Quote </Link>
      </div>
    </div>
  )
};

export default Header;
