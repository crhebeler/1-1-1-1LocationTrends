import React from 'react';
import {Jumbotron} from 'reactstrap'; 
// All Headers will be styled the same in this CSS file
import "../styles/Maps.css"; 






const MapHead = (props) => {
  return (
    <div>
      
  
      <Jumbotron className="JumboHead"> 

        
      
     
<h1 className="display-3" margin-top="40px">ArcGIS Interactive Map</h1>
<h4 className="lead"> Explore Florida through Visuals Below</h4>

</Jumbotron>
  


    </div> );} 
    



export default MapHead;
