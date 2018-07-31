import React from 'react';
//import '../styles/dataRequest.css';




export class DataRequest extends React.Component {
  constructor(props) {
    super(props);

    

  }
  
  render() {  
    return (

    
      
    <section className="TheDataCenter"> 

          {this.props.data["County"]} 
      
    
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
     </section> 
    ); 
  }} 