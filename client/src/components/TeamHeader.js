import React from 'react'; 
// All Headers will be styled the same in this CSS file
import { Jumbotron, Container } from 'reactstrap';
//import '../styles/Header.css': 


const map = {
  title: 'Florida Map Orange',
  src: 'https://github.com/crhebeler/LocationTrendsAPP/blob/master/client/florida.png?raw=true' 
};



const TeamHeader = (props) => {
    return (
      <div>
        <Jumbotron fluid>
  
          <Container fluid>
  
            <h1 className="display-3">Meet The Team</h1>


            
  
            <p className="lead"> We enjoy helping you find the Data you need !</p>
            
            <img className="map" src={map.src} alt={map.title} />
      <div/> 
      
  
  
          </Container>
  
        </Jumbotron>
  
      </div>
    );
  };
  
  export default TeamHeader;
  