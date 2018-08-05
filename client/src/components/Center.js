import React from "react";
import { ChildDropdown } from './Dropdowns-Children/ChildDropdown.js'
import { ParentDropdownData } from "./Dropdowns-Parents/ParentDropdownData";
import { ParentDropdownYear } from "./Dropdowns-Parents//ParentDropdownYear";
import { DataRequest } from "./DataRequest";
import "../styles/Center.css";
import axios from "axios";
import {Form, Container} from 'reactstrap'; 
import _ from "lodash"; //Fix for the nested array probem
import Responsive from 'react-responsive';/// Adding mobile Responsive


















class Center extends React.Component {
  constructor(props) {
    super(props);

    /// This sets the Default name and year for the User to change
    this.state = {
      name: "Alachua",
      year: "2008",
      data: "Births",
      dataRequest: []
    };

    this.changeName = this.changeName.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeData = this.changeData.bind(this);
  }
  ///Name of County to select
  changeName(newName) {
    this.setState({
      name: newName
    });
  } /// Name of Year of selction of data
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

  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .get(`/api/all`, {
        /// axios grabing the api routes from created api all folder//
        params: {
          name: this.state.name,
          data: this.state.data,
          year: this.state.year
        }
      })
      .then(response => {
        console.log(response.data);
        var arrayResponse = [];
        var responseData = [];
        for (var key in response.data) {
          if (response.data.hasOwnProperty(key)) {
            {
              /* nested arrays caused half of the data to not show  this was the fix*/
            }
            var flatData = _.flattenDeep(responseData);
            arrayResponse.push(response.data[key]);
            responseData = [];
          }
        }
        console.log("Foobar", arrayResponse);
        this.setState({ dataRequest: arrayResponse });
      });
  }
  render() {
    return (
      <div>
        <Form className="Form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="instructions">
            Select your <br/>Data Type ,Year<br /> and Florida County
            <br /> Below to Render Results
          </div>
          <br/>
          <label>
            <ParentDropdownYear
              year={this.state.year}
              onChange={this.changeYear}
              changeYear={this.changeYear.bind(this)}
            />
          </label>
          <label>
            <ParentDropdownData
              data={this.state.data}
              onChange={this.changeData}
              changeData={this.changeData.bind(this)}
            />
          </label>
          <label>
            <ChildDropdown name={this.state.name} onChange={this.changeName} />
          </label>
          <br /> 
          <br/>
          <input type="submit" value="Submit" />
        </Form>
        <div>
          <div className="ResultsDiv">
            <div className="ResultsDiv">
              {" "}
              {/* Dynamic data created here */}
              <div className="ResultsDiv">
                <div>{/*County*/}</div>
                <div>{/*2009*/}</div>
                <div>{/*2010*/}</div>
                <div>{/*2011*/}</div>
                <div>{/*2012*/}</div>
                <div>{/*2013*/}</div>
                <div>{/*2014*/}</div>
                <div>{/*2015*/}</div>
                <div>{/*2016*/}</div>
                <div>{/*2017*/}</div>
                <div>{/*2018*/}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          {/*JSon to stringy to make the key unqie NO DUPLICATE KEYS*/}
          {this.state.dataRequest
            ? this.state.dataRequest.map(data => (
                <DataRequest className="Box" key={JSON.stringify(data)} data={data} />)): null} 
                <div />                                   
        </div>{" "}
        {/* end of dynamic table */}
      </div>
    );
  }
}

export default Center;
