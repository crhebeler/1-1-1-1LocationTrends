import React from 'react';
import '../styles/Footer.css';
import { Card,CardFooter} from 'reactstrap';





const footStyle = {
color: 'black'
};



const Footer = (props) => {
  return (

<footer> 

    

    <Card>
       
        <CardFooter style={footStyle} className="text-muted">Location Trends App  &copy; 2018  </CardFooter>
      </Card>
 
   </footer> 
  );
};


export default Footer;
