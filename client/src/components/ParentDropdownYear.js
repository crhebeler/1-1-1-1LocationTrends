import React from 'react';

import { DataYear } from './ChildDropdownYear';

export class ParentDropdownYear extends React.Component {
  constructor(props) {
    super(props);

    this.state = { year: 'Default' };
    
    this.changeData = this.changeData.bind(this);
  }
  
  changeData(newYear) {
    this.setState({
      year: newYear
    });
  }

  render() {
    return <DataYear  name={this.state.year} onChange={this.changeData} />
  }
}
