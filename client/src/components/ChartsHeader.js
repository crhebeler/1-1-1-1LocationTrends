import React from 'react'; 

import {Jumbotron} from 'reactstrap'; 
import '../styles/Charts.css';  

import '../styles/Team.css';



const ChartsHeader = (props) => {
    return (

   
   
    <div className="jumbo-chart"> 
   <Jumbotron > 

        
      
     
<h1 className="display-3" >Charts</h1>
<h4 className="lead"> Dynamic Data rendered through Chart.JS (More Chart options coming soon!)</h4>


</Jumbotron>
  
  </div> 
        

    );
  };
  
  export default ChartsHeader;
  