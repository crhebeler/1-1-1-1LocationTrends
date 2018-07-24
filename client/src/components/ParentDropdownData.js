import React from 'react';

import { DataBase } from './ChildDropdownData';

export class ParentDropdownData extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: 'Default' };
    
    this.changeData = this.changeData.bind(this);
  }
  
  changeData(newData) {
    this.setState({
      data: newData
    });
  }

  render() {
    return <DataBase name={this.state.data} onChange={this.changeData} />
  }
}

