import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home'; 
import './index.css';
import Maps from "./components/Maps"; 
import Charts from "./components/Charts"; 
import Team from "./components/Team";



class App extends Component {
   render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Charts" component={Charts} />
          <Route path="/Maps" component={Maps} />
          <Route path="/Team" component={Team} />
         
          
        </div>
      </Router>
    );
  }
}

export default App;
