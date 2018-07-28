import React from 'react';

import { DataBase } from './ChildDropdownData';

export class ParentDropdownData extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.data };
    

  }
  


  render() {
    return <DataBase name={this.state.data} onChange={this.props.changeData} changeData={this.props.changeData} />
  }
}

