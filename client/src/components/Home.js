import React from 'react';
import Header from './Header';
import Center from "./Center";
import Footer from "./Footer";
//import DataResults from "./DataResults";
import NavLink from './Navlink';
// import Charts from './components';



const Home = (props) => {

  

  return (
    <div>
      
     < NavLink /> 
     <Header /> 
     <Center />
     {/*<DataResults />*/} 
     <Footer /> 
  
  


    </div>
  );
};

export default Home;