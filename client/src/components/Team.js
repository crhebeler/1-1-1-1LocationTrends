import React from 'react';
import NavLink from './Navlink';
import Footer from './Footer'; 
import TeamHeader from './TeamHeader'; 
import '../styles/Team.css';
import { Container, Row, Col } from 'reactstrap';

const Chris = {
  title: 'Chris',
  src: 'https://github.com/crhebeler/LocationTrendsAPP/blob/master/client/src/chris.jpg?raw=true' 
};

const Craig = {
  title: 'Craig',
  src: 'https://github.com/crhebeler/LocationTrendsAPP/blob/master/client/src/craigplaceholdeer.png?raw=true' 
};


const Team = (props) => {
  return (

    <div>
         <NavLink /> 
      
  


              <Container>
      
        <Row>
          <Col></Col>
          <Col> <img className="craig" src={Craig.src} alt={Craig.title}  /></Col>
          <Col> <img className="chris" src={Chris.src} alt={Chris.title} /> </Col>
          <Col></Col>
        </Row>

          <Row>
          <Col></Col>
          <Col> <h3> Craig  <br/> Brooks </h3> </Col>
          <Col> <h3> Christopher <br/> Hebeler </h3>  </Col>
          <Col></Col>
        </Row>
        </Container> 

        <br/> 
        <br/> 
          <br/> 
        <br/> 
     
     
 <Footer /> 

    </div> 

  );
};

export default Team;