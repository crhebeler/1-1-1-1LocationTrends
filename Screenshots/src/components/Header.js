import React from 'react';
import Florida from '../Images/florida.png' 
import '../styles/Header.css';
import {Container ,Jumbotron,  Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'; 
import FloridaOrangeMap from '../Images/florida.png';






export default class Header extends React.Component {
  render() {
    return (






<div>

   <Jumbotron> 

     <div className="JumboTextHeader"> 
         <h1 className="display-3">Location Trends APP</h1>
       
        <h4 className="lead">    Giving you valuable insights on the current data trends by location</h4>
        </div> 
      
        <img className="map" src={FloridaOrangeMap} alt="Florida Orange Map" />
      </Jumbotron>
     

</div> 
    );
  }
}