import React from 'react';

import '../styles/Header.css';
import {Container ,  Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const map = {
  title: 'Florida Map Orange',
  src: 'https://github.com/crhebeler/LocationTrendsAPP/blob/master/client/florida.png?raw=true' 
};



const headStyle = {
  height:'280px'

};

export default class Header extends React.Component {
  render() {
    return (
    <Container style={headStyle}>
   
<Row>
  <br/> 
  <br/>
         <Col> <img className="map" src={map.src} alt={map.title} /></Col>
        
   
         <Col>    
        
         <h1> Location Trends APP </h1> 
         <br/>
         <h4>   Giving you valuable insights on the current data trends by location</h4>
        
         
         
      
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
     <Link to='/Map'>Interactive Map</Link>
     <br/>
     <br/> 
      <Link to='/Team'>Meet the Team </Link>  </Col> 
       </Row>
</Container>
    );
  }
}