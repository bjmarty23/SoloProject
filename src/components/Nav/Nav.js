import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/info">
            Welcome
          </Link>
        </li>
        <li>
          <Link to="/user">
            nothing
          </Link>
        </li>
      
      </ul>
    </div>
  </div>
);

export default Nav;
