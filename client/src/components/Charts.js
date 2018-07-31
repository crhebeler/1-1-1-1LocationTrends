// import React from 'react';
import NavLink from './Navlink';
import Footer from './Footer';
import ChartsHeader from './ChartsHeader'; 
import {Bar, Line, Pie} from 'react-chartjs-2';
import React, {Component} from 'react';
import { Card } from 'reactstrap';
import axios from 'axios'; 


const styleContain = {
  backgroundColor:'white',
  margin: '30px',
 

};

const div ={  width: '70%', 
height:'60%',}

 class Charts extends Component{ 
   
  constructor(props)  {
    super(props);
    this.state = {
      chartData:{}
    }
  }

    static defaultProps = {
      displayTitle:true,
      displayLegend: true,
      legendPosition: 'right'
    }

    componentDidMount() {
      axios.get('/api/birth').then(response => {
        console.log(response);

        // Set up data here.
       
        
        const data = [
          response.data[17]['2008'],
          response.data[17]['2009'],
          response.data[17]['2010'],
          response.data[17]['2011'],
          response.data[17]['2012'],
          response.data[17]['2013'],
          response.data[17]['2014'],
          response.data[17]['2015'],
          response.data[17]['2016'],
          response.data[17]['2017'],
          response.data[17]['2018'],
      
        ];

        const chartData = {
          labels:['2008', '2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018'],
        datasets:[
          {
            label:'Birth Rates',
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
              'rgba(0, 0, 255, 0.6)'
            ]
          }
        ]
  
        }

        this.setState({ chartData: chartData });
      });
    }

    
  
    render() {
    return (




      <div className="charts">
      <NavLink /> 
      <Card style={styleContain} > 
       {/* <ChartsHeader />  */}
       <div style={div}> 
       <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Flagler County Birth Rates',
              fontSize: 35,
              fontStyle:'Anaphora',
            },
            legend:{
              display:this.props.displayLegend,
              position: this.props.legendPosition,
              maintainAspectRatio: false
            }
	             }}
/>
         </div>   
         </Card> 
            <Footer/>
            
      </div>
     )
   }
 }

export default Charts;