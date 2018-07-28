import React from 'react';
import { ChildDropdown } from './ChildDropdown';
import {ParentDropdownData} from './ParentDropdownData'; 
import { ParentDropdownYear } from './ParentDropdownYear'; 
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import axios from 'axios'; 
import '../styles/Center.css';
//import  { Hello } from './CenterButton'; 













{/*componentDidMount() {
  axios.get(`/api/deaths`)
    .then(res => {
      const posts = res.data.results.map(obj => ({title: obj.title, overview: obj.overview}));
      this.setState({ posts });
    }); */} 






    //const url = '/api/deaths'
   // axios.get(url).then(response => console.log(response));




class Center extends React.Component {
  constructor(props) {
    super(props);

   


    
/// This sets the Default name and year for the User to change
    this.state = { name: 'Alachua',
                   year:   '2008' ,
                    data:  'Births' }   ;
    
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
    axios.get(`/api/all`, {
      params: { 
       name: this.state.name,
       data: this.state.data,
      year:this.state.year
      }
    }).then(response => {
      console.log(response.data); 
    });
}










   render() {
    return (
    
    <form className="Form" onSubmit={this.handleSubmit.bind(this)}>
    <label>

      <br/> 
       <ParentDropdownYear year={this.state.year} onChange={this.changeYear} /> 

 
    </label>
    
    <label>
    <br/> 
      <ParentDropdownData  data={this.state.data} onChange={this.changeData} changeData={this.changeData.bind(this)} />
  
    </label>

    <label>
  
      <ChildDropdown name={this.state.name} onChange={this.changeName}  /> 
    </label>
     <br/>
     
    <br/> 

<input   type="submit" value="Submit" />

 


  </form>




);


   //<ChildDropdownYear year={this.state.name} onChangeYear={this.changeYear} /> 
  }
}


export default Center;  