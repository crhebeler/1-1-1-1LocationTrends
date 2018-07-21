import React from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { ChildDropdown } from './ChildDropdown';

// import { ChildDropdownYear} from './ChildDropDownYear'; 
//import { ChildDropdownYear} from './ChildDropDownYear'; 
import axios from 'axios'; 






class Center extends React.Component {
  constructor(props) {
    super(props);

/// This sets the Default name and year for the User to change
    this.state = { name: '____',
                   year: '-',
                  dataset:''};
    
    this.changeName = this.changeName.bind(this);
   // this.changeYear = this.changeYear.bind(this);
  }
  
  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  handleSubmit(event){ 
    console.log(event)
    event.preventDefault()
    console.log("handleSubmit"); 
    axios.get('/api/birth').then(response => {
      console.log(response.data); 
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