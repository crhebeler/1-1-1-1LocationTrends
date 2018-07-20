import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
//mport '../styles/Header.css';



const map = {
  title: 'Florida Map Orange',
  src: 'https://github.com/crhebeler/LocationTrendsAPP/blob/master/client/florida.png?raw=true' 
};



const Center = (props) => {
  return (
    <div>
      <Jumbotron fluid>

        <Container fluid>

          <h2 className="display-3">Location Trends APP</h2>

          <p className="lead">Helping you find the Data you need !</p>
          
         
   <img className="map" src={map.src} alt={map.title} />
    <div/> 
    


        </Container>

      </Jumbotron>



    </div>
  );
};

export default Center;
