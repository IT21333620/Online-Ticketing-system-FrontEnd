import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeHeader from './EmployeeHeader';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TextField,
  Button,
} from '@mui/material';
import './DisplayCrowded.css';
import activateBus from '../images/Active Bus.png';
import inactivateBus from '../images/Inactive Bus.png';

function TimetableComponent() {
  const [timetableData, setTimetableData] = useState(null);
  const [filteredTimetableData, setFilteredTimetableData] = useState(null);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [activeBusCount, setActiveBusCount] = useState(0);
  const [inactiveBusCount, setInactiveBusCount] = useState(0);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timetableApiUrl = 'http://localhost:8080/api/v1/timetable/getTimetable';
    const routeApiUrl = 'http://localhost:8080/api/v1/route/getRoute';
    const busApiUrl = 'http://localhost:8080/api/v1/bus/getBus';

    // Fetch data from the bus API and count rows where routeNo is 0
    fetch(busApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((busData) => {
        const activeBuses = busData.filter((bus) => bus.routeNo !== 0);
        const inactiveBuses = busData.filter((bus) => bus.routeNo === 0);
        setActiveBusCount(activeBuses.length);
        setInactiveBusCount(inactiveBuses.length);
      })
      .catch((error) => {
        console.error('Error fetching bus data:', error);
      });

    fetch(routeApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((routeData) => {
        const crowdedRoutes = routeData.filter((route) => route.status === 'Crowded' || route.status === 'Not Crowded');

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

  // Function to filter timetable data based on the search text
  const filterTimetableData = (searchText) => {
    if (searchText === '') {
      setFilteredTimetableData(timetableData);
    } else {
      const filteredData = timetableData.filter((item) =>
        item.busID.toString().includes(searchText)
      );
      setFilteredTimetableData(filteredData);
    }
  };

  // Handle search button click
  const handleSearch = () => {
    filterTimetableData(searchText);
  };

  return (
    <div>
      <EmployeeHeader />
      <div className="search-container" style={{ height: '100px' }}>
        <TextField
          label="Search by Bus ID"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button id = "search-btn-time" variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <div className="NoOfActiveBuses">
        <p id="ActiveBusPara">Active Buses</p>
        <p id="ActiveBusCountPara">0{activeBusCount}</p>
        <img src={activateBus} id="ActiveBusImg" alt="Active Bus" />
        <div id = "left-line"></div>
      </div>
      <div className="NoOfInactiveBuses">
        <p id="InactiveBusPara">Inactive Buses</p>
        <p id="InactiveBusCountPara">0{inactiveBusCount}</p>
        <img src={inactivateBus} id="InactiveBusImg" alt="Inactive Bus" />
        <div id = "right-line"></div>
      </div>
      
      <div id="display_timetable_details">
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default TimetableComponent;
