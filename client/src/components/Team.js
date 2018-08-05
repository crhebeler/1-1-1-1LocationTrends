import React from 'react';
import NavLink from './Navlink';
import Footer from './Footer'; 
import '../styles/Team.css';
import { Container, Row, Col } from 'reactstrap';
import TeamHeader from './TeamHeader'; 




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
      <NavLink/> 
         
              <TeamHeader/> 
              <Container>
        <Row>
     
          <Col><img className="chris" src={Chris.src} alt={Chris.title}  />
          <h3> Christopher  Hebeler</h3>
          <h5>Email crhebeler@gmail.com </h5> </Col>
          <Col><img className="craig" src={Craig.src} alt={Craig.title}  />
          <h3> Craig  Brooks </h3><h5> Email cwbrooks2003@yahoo.com </h5></Col>
     
        </Row>
        

   </Container> 
   

 <Footer className="foot" /> 

    </div> 

  );
};

export default Team;