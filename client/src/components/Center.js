import React from 'react';
import { ChildDropdown } from './ChildDropdown';
import {ParentDropdownData} from './ParentDropdownData'; 
import { ParentDropdownYear } from './ParentDropdownYear'; 
import axios from 'axios'; 



class Center extends React.Component {
  constructor(props) {
    super(props);

/// This sets the Default name and year for the User to change
    this.state = { name: '____',
                   year: '',
                  data:''};
    
    this.changeName = this.changeName.bind(this);

    this.changeYear = this.changeYear.bind(this);

   // this.changeDate = this.changeDate.bind(this); 
  }
  
  changeName(newName) {
    this.setState({
      name: newName
      
    });
  }
  changeYear(newYear) {
    this.setState({
      year: newYear
      
    });
  }
  changeData(newData) {
    this.setState({
     data: newData
      
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
       <ParentDropdownYear year={this.state.year} onChange={this.changeYear} /> 
  
    </label>
    
    <label>
    
      <ParentDropdownData  data={this.state.data} onChange={this.changeData} />
  
    </label>

    <label>
  
      <ChildDropdown name={this.state.name} onChange={this.changeName}  /> 
    </label>
    
    <input type="submit" value="Submit" />
  </form>
);
    
    
  
   //<ChildDropdownYear year={this.state.name} onChangeYear={this.changeYear} /> 
  }
}


export default Center;  