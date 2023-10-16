import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';


export default function InspectorTable() {

const [inspectorData, setInspectorData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/Inspector/getInspector')
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
        columns={columns}
        pageSize={5}
        checkboxSelection
        getRowId={(row) => row.userID} // Use a unique identifier here, either userID or inspectorID
      />
    </div>
  );
}