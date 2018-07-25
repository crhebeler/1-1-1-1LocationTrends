import React from 'react';

import '../styles/Header.css';
import {Container ,  Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
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


const map = {
  title: 'Florida Map Orange',
  src: 'https://github.com/crhebeler/LocationTrendsAPP/blob/master/client/florida.png?raw=true' 
};

export default class Header extends React.Component {
  render() {
    return (
    <Container>
   
<Row>
  <br/> 
  <br/>
         <Col> <img className="map" src={map.src} alt={map.title} /></Col>
        
   
         <Col>    
        
         <br/> 
         <h1> Location Trends APP </h1> 
         <h5>   Helping you find the Data you need !</h5>
         <br/> 
         <p> Select your Data Type ,Year and Floirda County Below to Render Results</p> 
         
         
      
         </Col>

         <Col> 
<br/> 
         <h4> <ul> Click on a Link to Navigate</ul> </h4> 

     <Link to='/'>Home</Link>
     <br/>
     <br/>
     <Link to='/Charts'>Charts</Link>
     <br/>
     <br/>
     <Link to='/Zillow'>Interactive Map</Link>
     <br/>
     <br/> 
      <Link to='/Team'>Meet the Team </Link>  </Col> 
       </Row>
</Container>
    );
  }
}