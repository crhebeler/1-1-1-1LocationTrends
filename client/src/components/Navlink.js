import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';
// ReactStrap Imports 
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
/// Had to change to NavLinker NavLink taken by ReactStrap 
  export default class NavLinker extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="#FF8B00;"  light expand="md">

          <NavbarBrand className="logo" color="white;" href="/"> Location Trends APP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem color="#FF8B00;" >
              <NavLink color="#black;" to='/Home'>  <Link to='/'>Home</Link></NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink to='/Charts'>  <Link to='/Charts'>Charts</Link></NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='Map'>  <Link to='/Map'>Interactive Map</Link></NavLink>
              </NavItem>

                 <NavItem>
                <NavLink to='Team'>  <Link to='/Team'>Meet the Team</Link></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
             
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <Link to='/'>Home</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to='/Charts'>Charts</Link>
                  </DropdownItem>
                
                  <DropdownItem>
                  <Link to='/Map'>Interactive Map</Link>
                  </DropdownItem>

                    <DropdownItem>
                  <Link to='/Team'>Meet the Team</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

 



