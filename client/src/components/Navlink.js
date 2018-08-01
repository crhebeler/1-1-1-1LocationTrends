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






const NavStyleInline = {  height:'90px'

}; 






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
        <Navbar style={NavStyleInline} color="#FF8B00;"  light expand="md">

          <NavbarBrand className="logo" color="white;" href="/"><h1> Location Trends APP</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem color="#FF8B00;" >
              <NavLink color="#black;" to='/Home'>  <Link to='/'><h4>Home</h4></Link></NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink to='/Charts'>  <Link to='/Charts'><h4>Charts</h4></Link></NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='Maps'>  <Link to='/Maps'><h4>Interactive Map</h4></Link></NavLink>
              </NavItem>

                 <NavItem>
                <NavLink to='Team'>  <Link to='/Team'><h4>Meet the Team</h4></Link></NavLink>
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
                  <Link to='/Maps'>Interactive Map</Link>
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

 



