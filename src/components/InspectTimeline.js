import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function InspectTimeline() {
  const [inspectorData, setInspectorData] = useState([]);
  const userId = 2;

  useEffect(() => {
    const empID = userId;
    fetch(`http://localhost:8080/api/Inspect/getInspectorUpComing/${empID}`)
      .then(response => response.json())
      .then(data => {
        setInspectorData(data);
      })
      .catch(error => console.error('Error:', error));
  }, [userId]);

  const columns = [
    { field: "inspectId", headerName: "Inspect ID", width: 150 },
    { field: "inspectDate", headerName: "Inspect Date", width: 150 },
    { field: "inspectTime", headerName: "Inspect Time", width: 150 },
    { field: "noFraudDetected", headerName: "No. of Frauds Detected", width: 200 },
    { field: "noOfPassengers", headerName: "No. of Passengers", width: 200 },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => (
        <Link to={`/EditInspectDetails/${params.row.inspectId}`}>Edit</Link>
      ),
    },
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
