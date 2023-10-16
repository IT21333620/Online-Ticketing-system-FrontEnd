import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import EmployeeHeader from '../components/EmployeeHeader'
import InspectProfile from '../components/InspectorProfile'
import HistoryBtn from '../components/HistoryBtn'
import InspectTimeline from '../components/InspectTimeline'




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