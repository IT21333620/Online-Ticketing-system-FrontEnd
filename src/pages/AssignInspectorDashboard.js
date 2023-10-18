import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import React from 'react'
import { Link } from 'react-router-dom'
import AssignBtn from '../components/AssignBtn'
import EmployeeHeader from '../components/EmployeeHeader'
import FraudPieChart from '../components/FraudPieChart'
import InspectorBarChart from '../components/InspectorBarChart'
import InspectorTable from '../components/InspectorTable'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import SearchInspector from '../components/SearchInspector'
import './AssignInspectorDashboard.css'



const AssignInspectorDashboard = () => {
  return (
    <div style={{overflowX: 'hidden',marginLeft:'6%'}}>
        
        <EmployeeHeader/>
        <ResponsiveAppBar/>
        <Container style={{marginTop:'30px'}}>
              <center><h1>Inspector DashBoard</h1></center>
        </Container>
        <Container style={{marginLeft:'6%'}}>
          <Grid container >
            <Grid xs={7}
                  md={9}
                  xl={11}>

            </Grid>
            <Grid xs={5}
                  md={3}
                  xl={1}>
              <Link to="/AssignInspector">
                <AssignBtn sx={{justifyContent: 'right'}}/>
              </Link>
            </Grid>
          </Grid>
        </Container>
        <Container className='Cont1'>
          <Grid container spacing={20}>
            <Grid xs={6}
                  xl={6}>
              <FraudPieChart/>
            </Grid>
            
            <Grid xs={6}
                  xl={6}>
              <InspectorBarChart/>
            </Grid>
          </Grid>
        </Container>
        <Container className='Cont2'>
          <Grid container>
            <Grid xs={7}
                  md={9}
                  xl={11}>
              
            </Grid>
            <Grid xs={5}
                  md={3}
                  xl={1}>
              <SearchInspector/>
            </Grid>
          </Grid>
          
          
        </Container>
        <h3>Inspectors</h3>
        <Container style={{marginTop:'30px'}}>
          <Grid>
            <InspectorTable/>
          </Grid>
        </Container>

        
        
        
        
        
        
    </div>
  )
}

export default AssignInspectorDashboard