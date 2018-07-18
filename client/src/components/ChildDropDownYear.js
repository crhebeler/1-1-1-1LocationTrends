import React from 'react';

export class ChildDropdownYear extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChangeYear = this.handleChangeYear.bind(this);
  }

  handleChange(e) {
    const year = e.target.value;
    this.props.onChangeYear(year);
  }

  render() {
    return (
      <div>
        <h1>
        for the year {this.props.year} 
        </h1>
        <select id="data-years" onChange={this.handleChange}>
        <option value="2008">
2008


</option>
</select> 
</div> 


);
}
}

