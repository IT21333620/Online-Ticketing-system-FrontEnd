import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


const chartSetting = {
    xAxis: [
      {
        label: 'Number of Inspectors',
      },
    ],
    width: 500,
    height: 400,
  };

  const valueFormatter = (value) => `${value}mm`;
  
  export default function InspectorBarChart() {
    const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/Inspect/countTodayInspectors')
      .then(response => response.json())
      .then(data => {
        const mappedData = Object.entries(data).map(([route, number]) => ({ route, number }));
        setDataset(mappedData);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {dataset.length > 0 && (
        <BarChart
          dataset={dataset}
          yAxis={[{ scaleType: 'band', dataKey: 'route', label: 'Routes', labelMargin: 10 }]}
          series={[{ dataKey: 'number', label: 'Today Inspectors', valueFormatter }]}
          layout="horizontal"
          {...chartSetting} // Assuming chartSetting is defined elsewhere
        />
      )}
    </div>
  );
};