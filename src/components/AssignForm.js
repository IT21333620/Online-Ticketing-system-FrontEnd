import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import React, { useState } from 'react';
import Swal from 'sweetalert2';


export default function AssignForm() {

  const [formData, setFormData] = useState({
    inspectorId: '',
    busId: '',
    routeId: '',
    inspectDate: null,
    inspectTime: null,
    noFraudDetected: 0,
    noOfPassengers: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: Number(e.target.value) });
  };

  const handleDateChange = (date) => {
    const dateConv = date.toISOString().split('T')[0]
    console.log('date conv' , dateConv)
    setFormData({ ...formData, inspectDate: date });
};

  const handleTimeChange = (time) => {
  const timeString = time.toISOString();
  const timePart = timeString.split('T')[1].split('.')[0];
  setFormData({ ...formData, inspectTime: timePart });
};

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    axios.post('http://localhost:8080/api/Inspect/createInspect', formData)
    .then(response => {
      Swal.fire({
        title: 'Payment Success!',
        text: 'Balance updated successfully.',
        icon: 'success',
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#f2f2f2', height: '110vh', borderRadius:3}} > 
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch', padding:3,paddingBottom:1},
      }}
      
    >
      {/* <form onSubmit={handleSubmit}> */}
        
        <Grid Container alignItems="center" justifyContent="center" sx={{marginBottom:5}}>
          <Grid sx={{marginBottom:2}}>
          Inspector ID
          </Grid>
          <Grid item xl={5}>
          <TextField id="inspectorId" label="Inspector ID" variant="outlined" style={{ width: '120%', backgroundColor: '#cfe8fc' }} required type={"number"} value={formData.inspectorId}
          onChange={handleChange}/>
          </Grid>
        </Grid>
        <Grid Container alignItems="center" justifyContent="center" sx={{marginBottom:5}}>
        <Grid sx={{marginBottom:2}}>
          Bus ID
          </Grid>
          <Grid item xl={5}>
          <TextField id="busId" label="Bus ID" variant="outlined" style={{ width: '120%',backgroundColor: '#cfe8fc' }}required type={"number"} value={formData.busId}
          onChange={handleChange}/>
          </Grid>
        </Grid>
        <Grid Container alignItems="center" justifyContent="center" sx={{marginBottom:5}}>
        <Grid sx={{marginBottom:2}}>
          Route ID
          </Grid>
          <Grid item xl={5}>
          <TextField id="routeId" label="Route ID" variant="outlined" style={{ width: '120%',backgroundColor: '#cfe8fc' }}required type={"number"} value={formData.routeId}
          onChange={handleChange}/>
          </Grid>
        </Grid>
        <Grid Container alignItems="center" justifyContent="center" sx={{marginBottom:5}}>
        <Grid sx={{marginBottom:2}}>
          Inspect Date
          </Grid>
          <Grid item xl={5}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
              disablePast
              views={['year', 'month', 'day']}
              sx={{width:'120%',backgroundColor: '#cfe8fc'}}
              value={formData.inspectDate}
              onChange={handleDateChange}
              required
            />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid Container alignItems="center" justifyContent="center" sx={{marginBottom:8}}>
        <Grid sx={{marginBottom:2}}>
          Inspect Time
          </Grid>
          <Grid item xl={5}>
        
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileTimePicker ampm={false} closeOnSelect={true} sx={{width:'120%',backgroundColor: '#cfe8fc'}} value={formData.inspectTime }
          onChange={handleTimeChange} required/>
          </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sx={{ marginLeft:25 }}>
          <Button variant="contained" style={{backgroundColor: '#04E057', color: 'white', fontSize: '20px'}} onClick={handleSubmit}>Submit</Button>
          </Grid>
        </Grid>
      {/* </form> */}
      </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
