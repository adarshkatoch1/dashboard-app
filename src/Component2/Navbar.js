import React from 'react';
import Nav from "./nav.css";
import logo2 from "../Assets/logo2.jpg";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className='container'>
        <div className='row'>
        <div className='logo-col'>
           <a href='#'> <h1>Yummy<span className='dot'>.</span></h1></a>
        </div>
        <div className='navbar'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Events</li>
                <li>Chefs</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
        </div>
        <button id='btn'>Book a Table</button>
        </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
