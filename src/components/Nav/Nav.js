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
          <Link to="/newlocation">
          NewLocation
          </Link>
        </li>
        <li>
          <Link to="/detail">
            Detail
          </Link>
        </li>
        <li>
          <Link to="/">
          <button
            onClick={this.logout}
            >Log Out
          </button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
