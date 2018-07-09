import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../styles/Navbar.css';

export default class Example extends React.Component {
  render() {
    return (
<div> 
        <Nav>
          <NavItem>
            <NavLink href="#">Home Page</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Charts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Zillow Api</NavLink>
          </NavItem>
        </Nav>
      
      </div>
    );
  }
}

