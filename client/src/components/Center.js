import React from 'react';
import { ChildDropdown } from './ChildDropdown';
//import { ChildDropdownYear} from './ChildDropDownYear'; 






class Center extends React.Component {
  constructor(props) {
    super(props);



    
/// This sets the Default name and year for the User to change
    this.state = { name: '____',
                   year: '-'};
    
    this.changeName = this.changeName.bind(this);
   // this.changeYear = this.changeYear.bind(this);
  }
  
  changeName(newName) {
    this.setState({
      name: newName
    });
  }
   render() {
    return (
    
    <form onSubmit={this.handleSubmit}>
    <label>
  
      <ChildDropdown name={this.state.name} onChange={this.changeName}  /> 
    </label>
    <br/> 
    <br/> 
    <input type="submit" value="Submit" />
  </form>
);
    
    
  
   //<ChildDropdownYear year={this.state.name} onChangeYear={this.changeYear} /> 
  }
}


export default Center; 