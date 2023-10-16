import React from 'react'
import EmployeeHeader from '../components/EmployeeHeader'
import HistoryBtn from '../components/HistoryBtn'
import InspectTimeline from '../components/InspectTimeline'
import InspectProfile from '../components/InspectorProfile'
import ResponsiveAppBar from '../components/ResponsiveAppBar'




const InspectorDetails = () => {
    return (
      <div style={{overflowX: 'hidden'}}>
          <ResponsiveAppBar/>
          <center><h1>Inspector Details</h1></center>
          <EmployeeHeader/>
          <InspectProfile/>
          <HistoryBtn/>
          <InspectTimeline/>          
      </div>
    )
  }
  
  export default InspectorDetails