import React from 'react';
import { ChildDropdown } from './ChildDropdown';
import {ParentDropdownData} from './ParentDropdownData'; 
import { ParentDropdownYear } from './ParentDropdownYear'; 
import axios from 'axios'; 
import '../styles/Center.css';
import {CenterButton} from './CenterButton'; 






 const Example = {
   title: 'Miami',
    src: 'https://github.com/crhebeler/My-JSX-code-snippets/blob/master/miami.png?raw=true' 
  }; 





    //const url = '/api/deaths'
   // axios.get(url).then(response => console.log(response));


    const url2 = '/api/deaths'
fetch(url2).then(data=>console.log(data));


class Center extends React.Component {
  constructor(props) {
    super(props);

   


    
/// This sets the Default name and year for the User to change
    this.state = { name: '____',
                   year:   '' ,
                    data:  '' }   ;
    
    this.changeName = this.changeName.bind(this);

    this.changeYear = this.changeYear.bind(this);

    this.changeData = this.changeData.bind(this); 
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
    axios.post('/api/birth').then(response => {
      console.log(response.data); 
    });
}










   render() {
    return (
    
    <form className="Form" onSubmit={this.handleSubmit}>
    <label>

      <br/> 
       <ParentDropdownYear year={this.state.year} onChange={this.changeYear} /> 

 
    </label>
    
    <label>
    <br/> 
      <ParentDropdownData  data={this.state.data} onChange={this.changeData} />
  
    </label>

    <label>
  
      <ChildDropdown name={this.state.name} onChange={this.changeName}  /> 
    </label>
    
    {/* } <input type="submit" value="Submit" /> */}

  </form>




);
    <CenterButton /> 

   //<ChildDropdownYear year={this.state.name} onChangeYear={this.changeYear} /> 
  }
}


export default Center;  