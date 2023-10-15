import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import AssignBtn from './AssignBtn';

export default function EditInspectForm() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} > 
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="inspectorId" label="Inspector ID" variant="outlined" />
      <TextField id="route_id" label="Route Number" variant="outlined" />
      <TextField id="inspect_date" label="Inspect Date" variant="outlined" format="YYYY-MM-DD"/>
      <TextField id="inspect_time" label="Inspect Time" variant="outlined" />
      <TextField id="noFraudDetected" label="No of Fraud" variant="outlined" />
      <TextField id="noOfPassengers" label="No of Passengers" variant="outlined" />
      </Box>
      <AssignBtn/>
        </Box>
      </Container>
    </React.Fragment>
  );
}
