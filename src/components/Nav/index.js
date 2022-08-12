import React from 'react';
// NavLink keeps the link highlighted when on the respective page
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function AppNavbar(props) {
  return (
    <Navbar className="navbar" expand="md">
      <Container>
        <Navbar.Brand href="/" className="initials">RA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-links">
            <NavLink to="/about" className={({ isActive }) =>
              (isActive ? "lactive-class" : "not-active-class")}>About</NavLink>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
