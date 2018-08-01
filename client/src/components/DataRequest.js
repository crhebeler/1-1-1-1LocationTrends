import React from 'react';
import { Card,CardFooter} from 'reactstrap';
import '../styles/Center.css';
import Center from './Center';









const cardStyle = {
  width: '220px',
  height: '160x', 
  margin: '8px',
  backgroundColor:'LightGrey' , 
  border: '5px solid black',
  textAlign: 'center',
  display:'inline-block'
};





export class DataRequest extends React.Component {
  constructor(props) {
    super(props);

    

  }
  
  render() {  
    return (

    <Card  style={cardStyle} >
<h3> Results </h3> 

          {this.props.data["County"]} 
          {this.props.data["County of  Dissolution"]}
    
         <div className='DataCenter'> 
          {this.props.data["2008"]}
        </div>
         <div className='DataCenter'> 
          {this.props.data["2009"]}
        </div> 
         <div className='DataCenter'> 
          {this.props.data["2010"]}
        </div> 
         <div className='DataCenter'> 
          {this.props.data["2011"]}
        </div> 
         <div className='DataCenter'> 
          {this.props.data["2012"]}
        </div> 
         <div className='DataCenter'> 
          {this.props.data["2013"]}
        </div> 
         <div className='DataCenter'> 
          {this.props.data["2014"]}
        </div> 
         <div className='DataCenter'> 
          {this.props.data["2015"]}
        </div> 
         <div className='DataCenter'> 
          {this.props.data["2016"]}
        </div> 
         <div className='DataCenter'> 
          {this.props.data["2017"]}
        </div> 
        <div className='DataCenter'>
          {this.props.data["2018 (So far this year"]}
        </div> 

</Card>
    ); 
  }} 