import React from 'react';

export class DataYear extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const DataYear = e.target.value;
    this.props.changeData(DataYear);
  }

  render() {
    return (


      <div>
        <h4>

       Year   {this.props.DataYear}  Selection
         <br/>
        </h4>
      
             
        <select id="data-year"onChange={this.handleChange}>

        <option value="2008">2008

          </option>

          <option value="2009">2009
          
          </option>
          <option value="2010">2010
          </option>
          <option value="2011">2011
          </option>
          <option value="2012">2012
          </option>
          <option value="2013">2014
          </option>
          <option value="2015">2015
          </option><option value="2016">2016
           </option>
          <option value="2017">2017
          </option>
          {/*<option value="2018">2018(est)
          </option>
          <option value="2018">2019(est)
          </option>
          <option value="2018">2020(est)
          </option>
          <option value="2018">2021(est)
    </option> 
    For furtue data add in
    */}
          </select>
        </div>
      );
    }
  }
