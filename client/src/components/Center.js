import React from "react";
import { Container, Row, Col } from 'reactstrap';

import '../styles/Center.css';




const map = {
  title: 'Florida Map Orange',
  src: 'https://fcit.usf.edu/florida/maps/pages/10400/f10400/i/f10400-05s.png' 
};




 class Center extends React.Component {
  render() {
    return (

      <div > 
      <img className="map" src={map.src} alt={map.title} />
      
      <Container>
      
      
        <Row>

          <Col><h2> Death's By Location</h2></Col>

          <Col><h2> Birth's by Location </h2> </Col>

          <Col><h2> Marrage Numbers By Location</h2> </Col>
         
        </Row>

        <Row>
          <Col><h2> Data set 4 By Location</h2></Col>


          <Col><h2> Data set 5 Location </h2> </Col>



          <Col><h2> Data set Location</h2> </Col>
         
        </Row>
      
    </Container> 
    </div> 
        );
  }
}

export default Center;