import React from 'react';

import { DataYear } from '../Dropdowns-Children/ChildDropdownYear';

export class ParentDropdownYear extends React.Component {
  constructor(props) {
    super(props);

    this.state = { year: this.props.year };
   
    
  }


  
  render() {
    return <DataYear  name={this.state.year} onChange={this.props.changeYear} changeData={this.props.changeYear} />
  }
}
