import React, { useEffect, useState } from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const FraudPieChart = () => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/Inspect/fraudByRoute')
      .then(response => {
        // Assuming the response is in the format you provided
        const newData = Object.keys(response.data).map(id => ({
          id,
          value: response.data[id],
          label: `Route ${id}`
        }));
        setData(newData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

    return (
      <div style={{ textAlign: 'center' }}>
        
        <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, outerRadius: 150,paddingAngle: 5,
            cornerRadius: 5},
          
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: 'gray',
        },
      }}
      height={300}
    />
    <Typography variant="h5" gutterBottom style={{ marginLeft: '-10px' }} >
        Frauds Detected by each Routes
      </Typography>
      </div>
        
    
    )
  }
  
  export default FraudPieChart