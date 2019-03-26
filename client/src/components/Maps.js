import React from 'react';
import MapHead from './MapHead';
import NavLink from './Navlink';
import Footer from './Footer';
import Iframe from 'react-iframe'; 
import {Section} from 'reactstrap'; 
const Maps = (props) => {
  return (
    <div>

   <NavLink /> 

   
<MapHead /> 


<div className="map-iframe-mobile" >
<Iframe className="iframe" url="https://www.arcgis.com/home/webmap/viewer.html?webmap=80aba8feca084c8c80ca93aa25bd8966"
        width="400px"
        height="400px"
        id="myId"
        className="FloridaInteractiveMap"
        display="initial"
        position="relative"
        allowFullScreen/>

</div> 

<section className="desk">

<Iframe className="iframe" url="https://www.arcgis.com/home/webmap/viewer.html?webmap=80aba8feca084c8c80ca93aa25bd8966"
        width="800px"
        height="780px"
        id="myId"
        className="Florida"
        display="initial"
        position="relative"
        allowFullScreen/>


</section>



<Footer /> 
  

 </div>
  );
};

export default Maps;