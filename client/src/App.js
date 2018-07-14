import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
//import Navlink from "./components/Navlink";
import Header from "./components/Header";
import Center from "./components/Center";
import Footer from "./components/Footer";
import DataResults from "./components/DataResults";
import Home from "./components/DataResults";

class App extends Component {
   render() {
    return (
      <div>
      <BrowserRouter>
      <Route exact path='/' component={Home}/>
      {/* <Route path='/Charts' component={Charts}/>
      <Route path='/Zillow' component={Zillow}/>
      <Route path='/Team' component={Team}/> */}
    </BrowserRouter>
    
      </div>
    );
  }
}

export default App;
