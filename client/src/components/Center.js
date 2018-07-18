import React from 'react';
import { ChildDropdown } from './ChildDropdown';
//import { ChildDropdownYear} from './ChildDropDownYear'; 

class Center extends React.Component {
  constructor(props) {
    super(props);
/// This sets the Default name and year for the User to change
    this.state = { name: '',
                   year: ''};
    
    this.changeName = this.changeName.bind(this);
   // this.changeYear = this.changeYear.bind(this);
  }
  
  changeName(newName) {
    this.setState({
      name: newName
    });
  }
   render() {
    return <ChildDropdown name={this.state.name} onChange={this.changeName}  /> 
   //<ChildDropdownYear year={this.state.name} onChangeYear={this.changeYear} /> 
  }
}


export default Center; 