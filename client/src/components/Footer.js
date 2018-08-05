import React from 'react';
import '../styles/Footer.css';
import { Card,CardFooter,Section} from 'reactstrap';





const footStyle = {
color: 'black'
};



const Footer = (props) => {
  return (

<div> 

    

    <Card className="footdiv">
       
        <CardFooter style={footStyle} className="text-muted"><h5>Location Trends App  &copy; 2018</h5> 
         <p> <em>Used Data from Florida Department of Health</em> </p>  </CardFooter>
      </Card>
 
   </div> 
  );
};


export default Footer;