// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import nav from "./nav.css";

const Navbar = () => (
  <nav className='navbar'>
    <ul>
      <li>
        <Link to="/" className='list-style'>Home</Link>
      </li>
      <li>
        <Link to="/about" className='list-style'>About</Link>
      </li>
      <li>
        <Link to="/about" className='list-style' >Our Services</Link>
      </li>
      <li>
        <Link to="/form" className='list-style' >Contact us</Link>
      </li>
      <li>
        <Link to="/about" className='list-style'>Help</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
