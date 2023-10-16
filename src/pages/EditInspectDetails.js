import React from 'react'
import EditInspectForm from '../components/EditInspectForm'
import EmployeeHeader from '../components/EmployeeHeader'
import ResponsiveAppBar from '../components/ResponsiveAppBar'




const EditInspectDetails = () => {
    return (
      <div style={{overflowX: 'hidden'}}>
          <EmployeeHeader/>
          <ResponsiveAppBar/>
          <center><h1>Assign Inspector</h1></center>
          <EditInspectForm/>
          
          
      </div>
    )
  }
  
  export default EditInspectDetails