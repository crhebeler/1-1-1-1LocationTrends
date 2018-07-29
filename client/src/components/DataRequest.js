import React from 'react';





export class DataRequest extends React.Component {
  constructor(props) {
    super(props);

    

  }
  
  render() {  
    return (
      <div>
        <li>
          {this.props.data["County"]}
        </li> 
        <li>
          {this.props.data["2008"]}
        </li>
        <li>
          {this.props.data["2009"]}
        </li> 
        <li>
          {this.props.data["2010"]}
        </li> 
        <li>
          {this.props.data["2011"]}
        </li> 
        <li>
          {this.props.data["2012"]}
        </li> 
        <li>
          {this.props.data["2013"]}
        </li> 
        <li>
          {this.props.data["2014"]}
        </li> 
        <li>
          {this.props.data["2015"]}
        </li> 
        <li>
          {this.props.data["2016"]}
        </li> 
        <li>
          {this.props.data["2017"]}
        </li> 
      </div> 
    ); 
  }
}

