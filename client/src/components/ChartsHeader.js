import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

// All CSS files will be styled the same ! 
import '../styles/Header.css';






const ChartsHeader = (props) => {
  return (
    <div>
      <Jumbotron fluid>

        <Container fluid>

          <h1 className="display-3">Charts (see the data in action)</h1>

          <p className="lead">Helping you find the Data you need !</p>
          
         
    <div/> 
    


        </Container>

      </Jumbotron>

    </div>
  );
};

export default ChartsHeader;
