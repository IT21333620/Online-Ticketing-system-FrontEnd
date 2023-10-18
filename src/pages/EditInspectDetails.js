import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  CssBaseline,
  Box,
  Grid,
  TextField,
  Button,
} from '@mui/material'; // Assuming you're using Material-UI
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import EmployeeHeader from '../components/EmployeeHeader';

const EditInspectDetails = () => {
  // Step 1: Define state variables
  const { id } = useParams();
  const [inspectorData, setInspectorData] = useState([]);

  const [formData, setFormData] = useState({
    inspectorId: '',
    busId: '',
    routeId: '',
    inspectDate: '',
    inspectTime: '',
    noFraudDetected: '',
    noOfPassengers: '',
  });

  // Step 2: Fetch inspector data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/Inspector/byInspector/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setInspectorData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [id]);

  // Step 3: Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const updateData = {
      ...formData,
      inspectDate: new Date(formData.inspectDate).toISOString(),
    };

    fetch(`http://localhost:8080/api/Inspector/updateInspect`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    // Placeholder for actual update logic
    console.log('Updated Data:', updateData);
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Your JSX code for headers, etc. */}
      <ResponsiveAppBar/>
      <EmployeeHeader/>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#f2f2f2', height: '118vh', borderRadius: 3 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ marginBottom: 5 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="inspectorId"
                  label="Inspector ID"
                  variant="outlined"
                  fullWidth
                  disabled
                  required
                  type="number"
                  defaultValue={formData.inspectorId}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="busId"
                  label="Bus ID"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  value={formData.busId}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="routeId"
                  label="Route ID"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  value={formData.routeId}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="inspectDate"
                  label=""
                  variant="outlined"
                  fullWidth
                  required
                  type="date"
                  value={formData.inspectDate}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="inspectTime"
                  label=""
                  variant="outlined"
                  fullWidth
                  required
                  type="time"
                  value={formData.inspectTime}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="noFraudDetected"
                  label="No of Frauds in Trip"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  value={formData.noFraudDetected}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="noOfPassengers"
                  label="No of Passengers"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  value={formData.noOfPassengers}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: '#04E057', color: 'white', fontSize: '20px', marginTop: '30px' }}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default EditInspectDetails;
