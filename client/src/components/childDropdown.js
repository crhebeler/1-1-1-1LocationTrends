import React from 'react';

export class ChildDropdown extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
    
      <div>
        <h4>
       Please Select a County and Year to view the Data Trends of Your Choice </h4> 
       <br/> 
       <br/> 

<h4> 
          You have chosen to view the Data avaiable for{this.props.name} County 

 </h4>
        <select id="great-names" onChange={this.handleChange}>
        <option value="Alachua">
              Alachua
              </option>

              <option value="Baker">
              Baker
              </option>

              <option value="Bay">
              Bay
              </option>

              <option value="Bradford">
              Bradford
              </option>

              <option value="Brevard">
              Brevard
              </option>

              <option value="Broward">
              Broward
              </option>

              <option value="Calhoun">
              Calhoun
              </option>

              <option value="Charlotte">
              Charlotte
              </option>

              <option value="Dixie">
              Dixie
              </option>



              Dixie
              <option value="Citrus">

              Citrus
              </option>

              <option value="Clay">
              Clay
              </option>

              <option value="Collier">
              Collier
              </option>

              <option value="Columbia">
              Columbia
              </option>

              <option value="DeSoto">
              DeSoto
              </option>

              <option value="Duval">
              Duval
              </option>

              <option value="Escambia">
              Escambia
              </option>

              <option value="Glades">
              Glades
              </option>

              <option value="Gulf">
              Gulf
              </option>

              <option value="Hamilton">

              Hamilton
              </option>



              <option value="Flagler">

              Flagler
              </option>

              <option value="Franklin">
              Franklin
              </option>

              <option value="Gadsden">
              Gadsden
              </option>

              <option value="Gilchrist">

              Gilchrist
              </option>

              <option value="Hardee">
              Hardee
              </option>

              <option value="Hendry">
              Hendry
              </option>


              <option value="Hernando">
              Hernando
              </option>

              <option value="Highlands">
              Highlands
              </option>
              <option value="Hillsborough">
              Hillsborough
              </option>

              <option value="Holmes">
                Holmes
              </option>

              <option value="Indian River">
              Indian River
              </option>

              <option value="Jackson">
              Jackson
              </option>

              <option value=" Jefferson">

              Jefferson
              </option> 

              <option value="Lafayette">
              Lafayette
              </option>


              <option value="Lake">
              Lake
              </option>

              <option value="Lee">
              Lee
              </option>

              <option value="Leon">
              Leon
              </option>

              <option value="Levy">
              Levy
              </option>

              <option value="Liberty">
              Liberty
              </option>

              <option value="Madison">
              Madison
              </option>

              <option value="Manatee">
              Manatee
              </option>

              <option value="Marion">
              Marion
              </option>

              <option value="Martin">
              Martin
              </option>

              <option value="Miami-Dade">
              Miami-Dade
              </option>


              <option value="Monroe">
              Monroe
              </option>


              <option value="Nassau">
              Nassau
              </option>


              <option value="Okaloosa">
              Okaloosa
              </option>


              <option value="Okeechobee">
              Okeechobee
              </option>


              <option value="Orange">
              Orange
              </option>


              <option value="Osceola">
              Osceola
              </option>


              <option value="Palm Beach">

              Palm Beach
              </option>


              <option value="Pasco">

              Pasco
              </option>


              <option value="Pinellas">
              Pinellas
              </option>


              <option value="Polk">
              Polk
              </option>


              <option value="Putnam">
              Putnam
              </option>

              <option value="Santa Rosa">
              Santa Rosa
              </option>

              <option value="Sarasota">
              Sarasota
              </option>

              <option value="Seminole">
              Seminole
              </option>

              <option value="St. Johns">
              St. Johns
              </option>

              <option value="St. Lucie">
              St. Lucie
              </option>

              <option value="Suwannee">
              Suwannee
              </option>

              <option value="Taylor">
              Taylor
              </option>

              <option value="Union">
              Union
              </option>

              <option value="Volusia">
              Volusia
              </option>

              <option value="Wakulla">
              Wakulla
              </option>

              <option value="Walton">
              Wakulla
              </option>

              <option value="Washington">
              Washington
              </option>
        </select>
</div>
);
  }
}
