import React from 'react';
import Florida from '../styles/florida.png' 
import '../styles/Header.css';
import {Container ,Jumbotron,  Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'



const map = {
  title: 'Florida Map Orange',
  src: 'https://github.com/crhebeler/LocationTrendsAPP/blob/master/client/florida.png?raw=true' 
};





export default class Header extends React.Component {
  render() {
    return (






<div>

   <Jumbotron> 

        
      
     
         <h1 className="display-3" margin-top="40px">Location Trends APP</h1>
       
        <h4 className="lead">    Giving you valuable insights on the current data trends by location</h4>
        <img className="map" src={map.src} alt={map.title} />
      </Jumbotron>
     

</div> 
    );
  }
}