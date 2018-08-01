import React from 'react';
import NavLink from './Navlink';
import Footer from './Footer'; 
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


const teamStyle = {
  height:'400px'

};



const Team = (props) => {
  return (

    <div>
         <NavLink /> 
      
  

      <h1> Meet the Team </h1> 

      <br/> 

              <Container style={teamStyle}>
      
        <Row>
          <Col></Col>
          <Col> <img className="craig" src={Craig.src} alt={Craig.title}  /></Col>
          <Col> <img className="chris" src={Chris.src} alt={Chris.title} /> </Col>
          <Col></Col>
        </Row>

          <Row>
          <Col></Col>
          <Col> <h3> Craig  <br/> Brooks </h3>
          <h5> Email cwbrooks2003@yahoo.com </h5> </Col>
          <Col> <h3> Christopher <br/> Hebeler</h3>
          <h5>Email crhebeler@gmail.com </h5>  </Col>
          <Col></Col>
          <br/> 
        <br/> 
        </Row>
        <br/> 
        <br/> 
        <br/> 
        <br/> 
        <br/> 
        <br/> 
        <br/> 
        <br/> 
        </Container> 

        <br/> 
        <br/> 
          <br/> 
        <br/> 
        <br/> 
       
        <br/> 
     
     
 <Footer /> 

    </div> 

  );
};

export default Team;