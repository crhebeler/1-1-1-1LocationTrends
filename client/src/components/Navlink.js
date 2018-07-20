import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';


const NavLink = () => (


  <header className="nav">
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Location Trends APP</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
    <Link to='/'>Home</Link>
    </NavItem>
    <NavItem eventKey={2} href="#">
    <Link to='/Charts'>Charts</Link>
    </NavItem>
    <NavItem eventKey={3} href="#">
    <Link to='/Zillow'>Zillow</Link>
    </NavItem>
    <NavItem eventKey={4} href="#">
    <Link to='/Team'>Meet the Team</Link>
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
</header>


);













export default NavLink
