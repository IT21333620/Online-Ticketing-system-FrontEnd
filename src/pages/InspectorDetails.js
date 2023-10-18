import React from 'react';
import EmployeeHeader from '../components/EmployeeHeader'
import HistoryBtn from '../components/HistoryBtn'
import InspectTimeline from '../components/InspectTimeline'
import InspectProfile from '../components/InspectorProfile'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import { Container, Grid } from '@mui/material'
import { useParams } from 'react-router-dom';



const InspectorDetails = () => {
    return (
      <div style={{overflowX: 'hidden'}}>
          <ResponsiveAppBar/>
          <center><h1 style={{margin:40}}>Inspector Details</h1></center>
          <EmployeeHeader/>
          <Container>
            <Grid container spacing={5}>
              <Grid item xl={4}>
                <InspectProfile />
              </Grid>
              <Grid item xl={8} >
                                
                  
                  <InspectTimeline />
              </Grid>
            </Grid>
          </Container>

          
          
                    
      </div>
    )
  }
  
  export default InspectorDetails