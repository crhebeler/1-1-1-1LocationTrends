import React from 'react';

import { Link } from 'react-router-dom'
import '../styles/Navbar.css';


const NavLink = () => (
  <header className="nav">
    <nav>
      <ul>
      <Link to='/'>Home</Link>
        <Link to='/Charts'>Charts</Link>
        <Link to='/Zillow'>Zillow</Link>
        <Link to='/Team'>Meet the Team</Link>
      </ul>
    </nav>
  </header>
)


export default NavLink
