import React from 'react';
import ZillowHead from './ZillowHead';
import NavLink from './Navlink';
import Footer from './Footer';
import Iframe from 'react-iframe'; 

const Zillow = (props) => {
  return (
    <div>
   <NavLink /> 
<ZillowHead /> 


<Iframe url="https://maps.hometownlocator.com/map_V3.html?mode=county&state=FL"
        width="850px"
        height="650px"
        id="myId"
        className="FloridaInteractiveMap"
        display="initial"
        position="relative"
        allowFullScreen/>




<Footer /> 
  
  


    </div>
  );
};

export default Zillow;