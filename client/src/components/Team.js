import React from 'react';
import NavLink from './Navlink';
import Footer from './Footer'; 
import '../styles/Team.css';

import Christopher from '../Images/chris.jpg'; 
import Craig from '../Images/craig.png';
import Mern from '../Images/Mern.png'; 
import Others from '../Images/others.png'; 
import Others2 from '../Images/others2.png'; 
import TeamPic from '../Images/teampic.jpg'; 
import { Container, Row, Col,Button } from 'reactstrap';
import TeamHeader from './TeamHeader'; 



const Team = (props) => {
  return (

    <div>
      <NavLink/> 
         
              <TeamHeader/> 
              <Container>
        <Row>
     
          <Col><img className="chris" src={Christopher} alt="Christopher"  />
          <h3> Christopher  Hebeler</h3>
          <h5><a href="mailto:crhebeler@gmail.com" ><Button  color="secondary" size="lg">Click Here <br/> Send Me an Email </Button></a></h5> </Col>
          <Col>
          
          
          <div className="team-picture">
          <img className="teampic" src={TeamPic} alt="Team Picture"  /> <h2 className="teamhideondesk"> Team Picture </h2> </div></Col> 
          <Col><img className="craig" src={Craig} alt="Craig"  />
          <h3> Craig  Brooks </h3><h5> <a href="Email cwbrooks2003@yahoo.com" ><Button  color="secondary" size="lg">Click Here <br/> Send Me an Email </Button></a> </h5></Col>
     
        </Row>
        <div className="tech"> 
        <h3> Some of the technologies that were used in the Location Trend's App Development </h3>

        </div> 
 <section> 
        <Row>

 <Col>  <img className="Mern" src={Others} alt="Express Logo"  /> </Col> 
     <Col>
  <img className="Mern" src={Mern} alt="MongoLogo"  /></Col> 

     <Col>  <img className="Mern" src={Others2} alt="React Logo"  /></Col> 



   </Row>
        </section> 

   </Container> 
   

<Footer/> 

    </div> 

  );


};

export default Team;