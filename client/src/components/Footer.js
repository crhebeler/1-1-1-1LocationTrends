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
       
        <CardFooter style={footStyle} className="text-muted"><h5>Location Trends App  &copy; 2018</h5> <br/> <p> <em>Used Data from Florida Department of Health</em> </p>  </CardFooter>
      </Card>
 
   </footer> 
  );
};


export default Footer;
