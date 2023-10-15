import React from 'react'
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import Typography from '@mui/material/Typography';

const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];
  

const FraudPieChart = () => {
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