import React from 'react'; 
// All Headers will be styled the same in this CSS file
import {Jumbotron} from 'reactstrap'; 
//import '../styles/Header.css': 

import '../styles/Team.css';



const TeamHeader = (props) => {
    return (

   
      <div className='team-head'> 
    
   <Jumbotron> 

        
     
     
<h1 className="display-3" margin-top="40px">Meet the Team</h1>
<h4 className="lead"> The Developers of Location Trends APP</h4>

</Jumbotron>
  
</div>
        

    );
  };
  
  export default TeamHeader;
  

