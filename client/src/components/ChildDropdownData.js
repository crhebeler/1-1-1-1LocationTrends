import React from 'react';

export class DataBase extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const DataBase = e.target.value;
    this.props.changeData(DataBase);
  }

  render() {
    return (


      <div>
        <h4>
      
                    Data Choice {this.props.DataBase} 
    
        </h4>
      
             
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

        
        </select>
      </div>
    );
  }
}
