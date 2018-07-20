import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
//mport '../styles/Header.css';



const map = {
  title: 'Florida Map Orange',
  src: 'https://fcit.usf.edu/florida/maps/pages/10400/f10400/i/f10400-05s.png' 
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
