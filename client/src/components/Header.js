import React from 'react';

import '../styles/Header.css';
import {Container ,  Row, Col } from 'reactstrap';


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
         <Col> <img className="map" src={map.src} alt={map.title} /></Col>
        
   
         <Col>    
         <h1> Location Trends APP </h1> 
         <h5>   Helping you find the Data you need !</h5>
         <br/> 
         <p> Select your Data Type ,Year and Floirda County Below to Render Results</p> 
         
         
      
         </Col>
         <Col>.col</Col>
       </Row>
</Container>
    );
  }
}