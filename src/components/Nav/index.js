import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  // const {
  //   contactSelected,
  //   setContactSelected,
  // } = props;

  return (
    <header className="navbar">
      <Link to='/' className='initials'>RA</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Nav;
