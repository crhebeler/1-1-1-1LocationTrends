import React from 'react';

export class DataBase extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const DataBase = e.target.value;
    this.props.onChange(DataBase);
  }

  render() {
    return (


      <div>
        <h1>
         Data from  {this.props.DataBase} County 
        </h1>
      
             
        <select id="data-base"onChange={this.handleChange}>

         <option value="Births">Births
         </option> 

         <option value="Deaths">Deaths
         </option>

            <option value="Marriages">Marriages
         </option> 

         <option value="Marriage-Dissolution">Marriage Dissolutions
         </option>   
         
         <option value="Population-Growth"> Population Growth 
         </option> 

         <option value="School-Grades"> School Grades 
        
        </option>
        </select>
      </div>
    );
  }
}