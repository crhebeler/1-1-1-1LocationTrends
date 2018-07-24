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
         <Col> <img className="map" src={map.src} alt={map.title} /></Col>
         <Col> </Col> 
         <Col> </Col> 
         <Col>.col</Col>
         <Col>    
         <br/>   <p>Helping you find the Data you need !</p> </Col>
         <Col>.col</Col>
       </Row>
</Container>
    );
  }
}