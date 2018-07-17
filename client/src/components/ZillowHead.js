import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
// All Headers will be styled the same in this CSS file
import '../styles/Header.css'; 






const ZillowHead = (props) => {
  return (
    <div>
      <Jumbotron fluid>

        <Container fluid>

          <h1 className="display-3">Zillow API</h1>

          <p className="lead">Helping you find the Data you need !</p>
          
         
    <div/> 
    


        </Container>

      </Jumbotron>

    </div>
  );
};

export default ZillowHead;
