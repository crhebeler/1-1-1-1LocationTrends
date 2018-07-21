import React from 'react';
import '../styles/Footer.css';
import { Card,CardFooter} from 'reactstrap';

const Footer = (props) => {
  return (

<footer> 

    

    <Card>
       
        <CardFooter className="text-muted">Location Trends App  &copy; 2018  </CardFooter>
      </Card>
 
   </footer> 
  );
};


export default Footer;
