import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import AssignBtn from './AssignBtn';
import Grid from '@mui/material/Unstable_Grid2';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import Button from '@mui/material/Button';

export default function EditInspectForm() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{  bgcolor: '#f2f2f2', height: '110vh', borderRadius:3 }} > 
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
    >
      <Grid Container alignItems="center" justifyContent="center" sx={{marginBottom:5}}>
          <Grid sx={{marginBottom:2}}>
          Inspector ID
          </Grid>
          <Grid item xl={5}>
          <TextField id="inspectorId" label="Inspector ID" variant="outlined" style={{ width: '120%', backgroundColor: '#cfe8fc' }} required type={"number"}/>
          </Grid>
        </Grid>
        <Grid Container alignItems="center" justifyContent="center" sx={{marginBottom:5}}>
        <Grid sx={{marginBottom:2}}>
          Bus ID
          </Grid>
          <Grid item xl={5}>
          <TextField id="busId" label="Bus ID" variant="outlined" style={{ width: '120%',backgroundColor: '#cfe8fc' }}required type={"number"}/>
          </Grid>
        </Grid>
        <Grid Container alignItems="center" justifyContent="center" sx={{marginBottom:5}}>
        <Grid sx={{marginBottom:2}}>
          Route ID
          </Grid>
          <Grid item xl={5}>
          <TextField id="routeId" label="Route ID" variant="outlined" style={{ width: '120%',backgroundColor: '#cfe8fc' }}required type={"number"}/>
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
          <MobileTimePicker ampm={false} closeOnSelect={true} sx={{width:'120%',backgroundColor: '#cfe8fc'}} />
          </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sx={{ marginLeft:25 }}>
          <Button type="submit" variant="contained" style={{backgroundColor: '#04E057', color: 'white', fontSize: '20px'}}>Submit</Button>
          </Grid>
        </Grid>
        <Grid Container alignItems="center" justifyContent="center" sx={{marginBottom:5}}>
          <Grid sx={{marginBottom:2}}>
          Inspector ID
          </Grid>
          <Grid item xl={5}>
          <TextField id="inspectorId" label="Inspector ID" variant="outlined" style={{ width: '120%', backgroundColor: '#cfe8fc' }} required type={"number"}/>
          </Grid>
        </Grid>
        <Grid Container alignItems="center" justifyContent="center" sx={{marginBottom:5}}>
          <Grid sx={{marginBottom:2}}>
          Inspector ID
          </Grid>
          <Grid item xl={5}>
          <TextField id="inspectorId" label="Inspector ID" variant="outlined" style={{ width: '120%', backgroundColor: '#cfe8fc' }} required type={"number"}/>
          </Grid>
        </Grid>
      <TextField id="noFraudDetected" label="No of Fraud" variant="outlined" />
      <TextField id="noOfPassengers" label="No of Passengers" variant="outlined" />
      </Box>
      <AssignBtn/>
        </Box>
      </Container>
    </React.Fragment>
  );
}
