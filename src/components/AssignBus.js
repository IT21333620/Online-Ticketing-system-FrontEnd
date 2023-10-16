import axios from 'axios';
import EmployeeHeader from '../components/EmployeeHeader';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import {
  Button,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@mui/material';
import './AssignBus.css';


function AssignBus() {
  const location = useLocation();
  const { selectedRecords } = location.state || { selectedRecords: [] };
  const [allocatedTime, setAllocatedTime] = useState({});
  const [allocatedDay, setAllocatedDay] = useState({});
  const [busData, setBusData] = useState([]);
  const [busID, setBusID] = useState({});
  const [filteredBusData, setFilteredBusData] = useState([]);
  const [routeData, setRouteData] = useState([]);
  
  useEffect(() => {
    const fetchRouteData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/route/getRoute');//Fetch route data.
        const routeData = response.data;
        setRouteData(routeData);
      } catch (error) {
        console.error('Error fetching route data:', error);
      }
    };

    const fetchBusData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/bus/getBus');//Fetch bus data.
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
    //Display a SweetAlert confirmation alert.
    Swal.fire({
      title: 'Confirmation',
      text: 'This will notify the bus owners. Are you sure you want to save the timetable?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        //If clicked "OK" user will be redirected.
        selectedRecords.forEach(record => {
          const dataToSave = {
            busID: busID[record.scheduleNo],
            routeID: record.routeID,
            startTime: allocatedTime[record.scheduleNo],
            day: allocatedDay[record.scheduleNo],
          };

          
          axios.post('http://localhost:8080/api/v1/timetable/saveTimetable', dataToSave)//Save timetable data.
            .then(response => {
              // Handle success
              console.log('Data saved successfully:', response.data);
            })
            .catch(error => {
              // Handle error
              console.error('Error saving data:', error);
            });
        });

        //After saving data, redirect the user to display the timetable.
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
                    value={busID[record.scheduleNo] || ''}
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
                    value={allocatedTime[record.scheduleNo] || ''}
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
