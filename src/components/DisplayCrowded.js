import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import EmployeeHeader from '../components/EmployeeHeader'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Checkbox,
} from '@mui/material';
import './DisplayCrowded.css';

function TimetableComponent() {
  const [timetableData, setTimetableData] = useState(null);
  const [filteredTimetableData, setFilteredTimetableData] = useState(null);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timetableApiUrl = 'http://localhost:8080/api/v1/timetable/getTimetable';
    const routeApiUrl = 'http://localhost:8080/api/v1/route/getRoute';

    fetch(routeApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((routeData) => {
        const crowdedRoutes = routeData.filter((route) => route.status === 'Crowded');
        
        fetch(timetableApiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((timetableData) => {
            const matchingTimetableData = timetableData.filter((item) =>
              crowdedRoutes.some((route) => route.id === item.routeID)
            );
            setTimetableData(timetableData);
            setFilteredTimetableData(matchingTimetableData);
          })
          .catch((error) => {
            console.error('Error fetching timetable data:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching route data:', error);
      });
  }, []);

  useEffect(() => {
    // This effect will run whenever selectedRecords changes
    console.log("Selected Records:", selectedRecords);
  }, [selectedRecords]); // Add selectedRecords as a dependency

  const handleCheckboxChange = (item) => {
    if (selectedRecords.some((record) => record.scheduleNo === item.scheduleNo)) {
      setSelectedRecords(selectedRecords.filter((record) => record.scheduleNo !== item.scheduleNo));
    } else {
      setSelectedRecords([...selectedRecords, item]);
    }
  };

  const handleSuccessClick = () => {
    navigate('/AssignBus', { state: { selectedRecords } });
  };

  return (
    <div id="assignbus_display_details">
      <p id = "all-crowded-bus-details-heading">All Crowded Bus Details</p>
      <div className="horizontal-header">
        <div id = "Selected-topic"></div>
        <p className = "horizontal-header-para" id = "crowded-para-1">01. Crowded Routes</p>
        <p className = "horizontal-header-para" id = "crowded-para-2">02. Assign Bus</p>
        <p className = "horizontal-header-para" id = "crowded-para-3">03. Modified Table</p>
      </div>
      <EmployeeHeader/>
      {filteredTimetableData ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Schedule No</TableCell>
                <TableCell>Route ID</TableCell>
                <TableCell>Bus ID</TableCell>
                <TableCell>Day</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>Select To Assign</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTimetableData.map((item) => (
                <TableRow key={item.scheduleNo}>
                  <TableCell>{item.scheduleNo}</TableCell>
                  <TableCell>{item.routeID}</TableCell>
                  <TableCell>{item.busID}</TableCell>
                  <TableCell>{item.day}</TableCell>
                  <TableCell>{item.startTime}</TableCell>
                  <TableCell>
                    <Checkbox
                      checked={selectedRecords.some((record) => record.scheduleNo === item.scheduleNo)}
                      onChange={() => handleCheckboxChange(item)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>Loading data...</p>
      )}
      <Button id = "crowded-continue-btn" variant="contained" onClick={handleSuccessClick}>Continue</Button>
    </div>
  );
}

export default TimetableComponent;
