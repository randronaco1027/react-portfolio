import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  // const [
  //   contactSelected,
  //   setContactSelected,
  // ] = useState;

  return (
    <header className="navbar">
      <NavLink to='/' className='initials'>RA</NavLink>
      <nav>
        <NavLink to="/" className={({ isActive }) =>
          (isActive ? "lactive-class" : "not-active-class")}>
          About
        </NavLink>

        <NavLink to="/portfolio" className={({ isActive }) =>
          (isActive ? "lactive-class" : "not-active-class")}>
          Portfolio
        </NavLink>

        <NavLink to="/resume" className={({ isActive }) =>
          (isActive ? "lactive-class" : "not-active-class")}>
          Resume
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) =>
          (isActive ? "lactive-class" : "not-active-class")}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Nav;
