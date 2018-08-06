import React from 'react';
import NavLink from './Navlink';
import Footer from './Footer'; 
import '../styles/Team.css';

import Christopher from '../Images/chris.jpg'; 
import Craig from '../Images/craig.png';
import { Container, Row, Col } from 'reactstrap';
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
          <h5>Email crhebeler@gmail.com </h5> </Col>
          <Col><img className="craig" src={Craig} alt="Craig"  />
          <h3> Craig  Brooks </h3><h5> Email cwbrooks2003@yahoo.com </h5></Col>
     
        </Row>
        

   </Container> 
   

 <Footer className="foot" /> 

    </div> 

  );
};

export default Team;