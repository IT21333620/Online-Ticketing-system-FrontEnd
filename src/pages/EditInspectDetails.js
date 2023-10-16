import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import AssignForm from '../components/AssignForm'
import EmployeeHeader from '../components/EmployeeHeader'
import EditInspectForm from '../components/EditInspectForm'




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