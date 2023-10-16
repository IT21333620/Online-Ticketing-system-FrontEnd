import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import AssignForm from '../components/AssignForm'
import EmployeeHeader from '../components/EmployeeHeader'




const AssignInspector = () => {
    return (
      <div style={{overflowX: 'hidden'}}>
          <EmployeeHeader/>
          <ResponsiveAppBar/>
          <center><h1>Assign Inspector</h1></center>
          <AssignForm/>
          
          
      </div>
    )
  }
  
  export default AssignInspector