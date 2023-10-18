import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from 'react';



const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`
  }
];



export default function InspectFutureTimeline() {

  const [inspectorData, setInspectorData] = useState([]);
  const userId = 2;

  useEffect(() => {
    const empID =userId;
    fetch(`http://localhost:8080/api/Inspect/getInspectorUpComing/${empID}`)
      .then(response => response.json())
      .then(data => {
        setInspectorData(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const columns = [
    { field: "userID", headerName: "User ID", width: 100 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "contactNo", headerName: "Contact No", width: 150 },
    { field: "userType", headerName: "User Type", width: 150 },
    { field: "inspectorID", headerName: "Inspector ID", width: 150 },
  ];


  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={inspectorData}
        pageSize={5}
        columns={columns}
        getRowId={(row) => row.inspectId}
      />
    </div>
  );
}