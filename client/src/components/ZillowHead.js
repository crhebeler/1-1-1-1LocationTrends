import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
// All Headers will be styled the same in this CSS file
import '../styles/Map.css';
import Iframe from 'react-iframe'






const ZillowHead = (props) => {
  return (
    <div>
      <Jumbotron fluid>

        <Container fluid>

          <h1 className="display-3">Zillow API</h1>

          <p className="lead">Helping you find the Data you need !</p>
          
         

<Iframe url="https://maps.hometownlocator.com/map_V3.html?mode=county&state=FL"
        width="650px"
        height="650px"
        id="myId"
        className="FloridaInteractiveMap"
        display="initial"
        position="relative"
        allowFullScreen/>



    <div/> 
    


        </Container>

      </Jumbotron>

    </div>
  );
};

export default ZillowHead;
