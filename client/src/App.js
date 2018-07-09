import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Center from "./components/Center";
import Footer from "./components/Footer";
import DataResults from "./components/DataResults";

class App extends Component {
   render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Center /> 
        <DataResults />
        <Footer />
      </div>
    );
  }
}

export default App;
