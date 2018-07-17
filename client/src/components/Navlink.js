import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';





const Navlink = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Charts' component={Charts}/>
      <Route path='/Zillow' component={Zillow}/>
      <Route path='/Team' component={Team}/>
    </Switch>
  </main>
)

export default Navbar
     