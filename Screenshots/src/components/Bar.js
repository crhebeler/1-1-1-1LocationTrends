import {Bar} from 'react-chartjs-2';
import React, {Component} from 'react';
import axios from 'axios'; 


class Bar extends Component{ 
   
    constructor(props)  {
      super(props);
      this.state = {
        barData:{}
      }
    }
  
      static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition: 'right'
      }
  
      componentDidMount() {
        axios.get('/api/marriages').then(response => {
          console.log(response);
  
          // Set up data here.
         
          
          const data = [
            // response.data[17]['2008'],
            // response.data[17]['2009'],
            // response.data[17]['2010'],
            // response.data[17]['2011'],
            // response.data[17]['2012'],
            // response.data[17]['2013'],
            // response.data[17]['2014'],
            // response.data[17]['2015'],
            // response.data[17]['2016'],
            // response.data[17]['2017'],
            // response.data[17]['2018'],
        
          ];
  
          const barData = {
            // labels:['2008', '2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018'],
          datasets:[
            {
              label:'Marrigaes Rates',
              data: data,
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(0,255, 0, 0.6)',
                'rgba(0, 0, 0, 0.6)',
                'rgba(0, 0, 128, 0.6)',
                'rgba(128, 0, 128, 0.6)',
                'rgba(128, 128, 0, 0.6)',
                'rgba(255, 255, 0, 0.6)',
                'rgba(255, 255, 255, 0.6)',
                // 'rgba(0, 0, 255, 0.6)'
              ]
            }
          ]
    
          }
  
          this.setState({ barData: barData });
        });
      }
  
      
    
      render() {
      return (
        <div className="Bar">
        {/* <NavLink />  */}
         {/* <ChartsHeader />  */}
         <div style={{width:'50%'}}> 
         <Bar
            data={this.state.barData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Marriages Rates',
                fontSize: 35,
              },
              legend:{
                display:this.props.displayLegend,
                position: this.props.legendPosition,
                maintainAspectRatio: false
              }
            }}
  />
  </div>
              
        </div>
       )
     }
   }
  
  export default Bar;