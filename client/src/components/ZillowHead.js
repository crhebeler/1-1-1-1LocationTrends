import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
// All Headers will be styled the same in this CSS file
import '../styles/Map.css';


const map = {
  title: 'Florida Map Orange',
  src: 'https://github.com/crhebeler/LocationTrendsAPP/blob/master/client/florida.png?raw=true' 
};





const ZillowHead = (props) => {
  return (
    <div>
      <Jumbotron fluid>

        <Container fluid>

          <h1 className="display-3">Florida Interactive County Map </h1>

          <p className="lead">Helping you find the Data you need !</p>
          <img className="map" src={map.src} alt={map.title} />
          <p>  Expore the Florida couties by using the interactive map </p> 




    <div/> 
    


        </Container>

      </Jumbotron>

    </div>
  );
};

export default ZillowHead;
