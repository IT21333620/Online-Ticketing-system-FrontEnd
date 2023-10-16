import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField, Select, MenuItem, Button } from '@mui/material';
import EmployeeHeader from '../components/EmployeeHeader'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from '@mui/material';
import axios from 'axios';
import './AssignBus.css';
import Swal from 'sweetalert2'; // Import SweetAlert

function AssignBus() {
  const location = useLocation();
  const { selectedRecords } = location.state || { selectedRecords: [] };

  const [routeData, setRouteData] = useState([]);
  const [busData, setBusData] = useState([]);
  const [filteredBusData, setFilteredBusData] = useState([]);
  const [timetableData, setTimetableData] = useState([]);

  const [busID, setBusID] = useState({});
  const [routeID, setRouteID] = useState({});
  const [allocatedTime, setAllocatedTime] = useState({});
  const [allocatedDay, setAllocatedDay] = useState({});

  useEffect(() => {
    // Fetch route data
    const fetchRouteData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/route/getRoute');
        const routeData = response.data;
        setRouteData(routeData);
      } catch (error) {
        console.error('Error fetching route data:', error);
      }
    };

    // Fetch bus data
    const fetchBusData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/bus/getBus');
        const busData = response.data;
        setBusData(busData);
        setFilteredBusData(busData.filter(bus => bus.routeNo === 0));
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    fetchRouteData();
    fetchBusData();
  }, []);

  const handleSaveClick = () => {
    // Display a SweetAlert confirmation dialog
    Swal.fire({
      title: 'Confirmation',
      text: 'This will notify the bus owners. Are you sure you want to save the timetable?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked OK, proceed with saving and redirecting
        selectedRecords.forEach(record => {
          const dataToSave = {
            busID: busID[record.scheduleNo],
            routeID: record.routeID,
            startTime: allocatedTime[record.scheduleNo],
            day: allocatedDay[record.scheduleNo],
          };

          // Make an API request to save data to the time_table table
          axios.post('http://localhost:8080/api/v1/timetable/saveTimetable', dataToSave)
            .then(response => {
              // Handle success
              console.log('Data saved successfully:', response.data);
            })
            .catch(error => {
              // Handle error
              console.error('Error saving data:', error);
            });
        });

        // After saving data, redirect to "/DisplayWholeTimeTable"
        window.location.href = '/DisplayWholeTimeTable';
      }
    });
  };

  return (
    <div id="Assign_bus_table">
      <p id = "assign-bus-heading">Assign Bus To Crowded Routes</p>
      <div className="horizontal-header" id = "hr-header-assign-bus">
        <div id = "Selected-topic"></div>
        <p className = "horizontal-header-para" id = "crowded-para-1">01. Crowded Routes</p>
        <p className = "horizontal-header-para" id = "crowded-para-2">02. Assign Bus</p>
        <p className = "horizontal-header-para" id = "crowded-para-3">03. Modified Table</p>
      </div>
      <EmployeeHeader/>
      <TableContainer component={Paper} id = "assign-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Bus ID</TableCell>
              <TableCell>Route ID</TableCell>
              <TableCell>Start</TableCell>
              <TableCell>End</TableCell>
              <TableCell>Allocated Time</TableCell>
              <TableCell>Allocated Day</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedRecords.map((record) => (
              <TableRow key={record.scheduleNo}>
                <TableCell>
                  <Select
                    id={`bus-id-${record.scheduleNo}`}
                    label="Bus ID"
                    variant="outlined"
                    value={busID[record.scheduleNo] || ''} // Bind value to the state variable
                    onChange={(e) => setBusID({ ...busID, [record.scheduleNo]: e.target.value })}
                  >
                    {filteredBusData.map((bus) => (
                      <MenuItem key={bus.id} value={bus.id}>
                        {bus.id}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>{record.routeID}</TableCell>
                <TableCell>
                  {routeData.find((route) => route.id === record.routeID)?.start}
                </TableCell>
                <TableCell>
                  {routeData.find((route) => route.id === record.routeID)?.end}
                </TableCell>
                <TableCell>
                  <TextField
                    id={`allocated-time-${record.scheduleNo}`}
                    label="Allocated Time"
                    variant="outlined"
                    value={allocatedTime[record.scheduleNo] || ''} // Bind value to the state variable
                    onChange={(e) => setAllocatedTime({ ...allocatedTime, [record.scheduleNo]: e.target.value })}
                  />
                </TableCell>
                <TableCell>
                  <Select
                    id={`allocated-day-${record.scheduleNo}`}
                    label="Allocated Day"
                    variant="outlined"
                    value={allocatedDay[record.scheduleNo] || ''}
                    onChange={(e) => setAllocatedDay({ ...allocatedDay, [record.scheduleNo]: e.target.value })}
                  >
                    <MenuItem value="Monday">Monday</MenuItem>
                    <MenuItem value="Tuesday">Tuesday</MenuItem>
                    <MenuItem value="Wednesday">Wednesday</MenuItem>
                    <MenuItem value="Thursday">Thursday</MenuItem>
                    <MenuItem value="Friday">Friday</MenuItem>
                    <MenuItem value="Saturday">Saturday</MenuItem>
                    <MenuItem value="Sunday">Sunday</MenuItem>
                    {/* Add more days as needed */}
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={handleSaveClick} id = "save-timetable-btn"> Save Timetable</Button>
    </div>
  );
}

export default AssignBus;
