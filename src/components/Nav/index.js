import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  // const [
  //   contactSelected,
  //   setContactSelected,
  // ] = useState;

  return (
    <header className="navbar">
      <Link to='/' className='initials'>RA</Link>
      <nav>
        <Link to="/" className="navLink">About</Link>
        <Link to="/portfolio" className="navLink">Portfolio</Link>
        <Link to="/resume" className="navLink">Resume</Link>
        <Link to="/contact" className="navLink">Contact</Link>
      </nav>
    </header>
  );
}

export default Nav;
