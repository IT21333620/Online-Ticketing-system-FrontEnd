import EmployeeHeader from '../components/EmployeeHeader';
import React, { useEffect, useState } from 'react';
import {
    Button,
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './DisplayCrowded.css';

function TimetableComponent() {
    const [filteredTimetableData, setFilteredTimetableData] = useState(null);
    const [selectedRecords, setSelectedRecords] = useState([]);
    const [timetableData, setTimetableData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const timetableApiUrl = 'http://localhost:8080/api/v1/timetable/getTimetable';//Database url to fetch timetable data.
        const routeApiUrl = 'http://localhost:8080/api/v1/route/getRoute';//Database url to fetch route data.

    fetch(routeApiUrl)
        .then((response) => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((routeData) => {
            const crowdedRoutes = routeData.filter((route) => route.status === 'Crowded');//Filter the records with status as "Crowded".
        
            fetch(timetableApiUrl)
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((timetableData) => {
                const matchingTimetableData = timetableData.filter((item) =>
                crowdedRoutes.some((route) => route.id === item.routeID)//Fetch routes corresponding to the id displayed.
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
    console.log("Selected Records:", selectedRecords);
}, [selectedRecords]);

//Function to handling the checkbox input.
const handleCheckboxChange = (item) => {
    if (selectedRecords.some((record) => record.scheduleNo === item.scheduleNo)) {
    setSelectedRecords(selectedRecords.filter((record) => record.scheduleNo !== item.scheduleNo));
    } else {
    setSelectedRecords([...selectedRecords, item]);
    }
};

//Function to handle button click
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
    <p>Loading data...</p>//Displaying a text while data loads.
    )}
    <Button id = "crowded-continue-btn" variant="contained" onClick={handleSuccessClick}>Continue</Button>
</div>
);
}

export default TimetableComponent;
