import React from 'react';
import ReactDOM from 'react-dom';
import { dropdownChild } from './childDropdown';

class parentDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Default' };
    
    this.changeName = this.changeName.bind(this);
  }
  
  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return <childDropdown name={this.state.name} onChange={this.changeName} />
  }
}



export default parentDropdown; 