import React, {useEffect, useState} from 'react';
import Header from '../components/PassengerHeader'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import {useUser} from '../UserContext';
import {Button, Container, Grid, Typography} from '@mui/material'

const UserDash = () => {
    const [passengerData, setPassengerData] = useState(null);
    const [onlinePaymentData, setOnlinePaymentData] = useState([]);
    const [localPaymentData, setlocalPaymentData] = useState([]);

    useEffect(() => {
        const userID = localStorage.getItem('userID');
        const fetchData = async () => {

            try {
                const response = await fetch(
                    `http://localhost:8080/api/tickets/passengerById/${userID}`
                );
                if (!response.ok) {
                    throw new Error('HTTP Error! status: ' + response.status);
                }
                const data = await response.json();
                setPassengerData(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const userID = localStorage.getItem('userID');
        const fetchOnlinePaymentData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/api/tickets/getOnlinePayment/${userID}`
                );
                if (!response.ok) {
                    throw new Error('HTTP Error! status: ' + response.status);
                }
                const data = await response.json();
                setOnlinePaymentData(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchOnlinePaymentData();
    }, []);

    useEffect(() => {
        const userID = localStorage.getItem('userID');
        const fetchLocalPaymentData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/api/tickets/getLocalPayment/${userID}`
                );
                if (!response.ok) {
                    throw new Error('HTTP Error! status: ' + response.status);
                }
                const data = await response.json();
                setlocalPaymentData(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchLocalPaymentData();
    }, []);


    return (
        <div style={{
                overflowX: 'hidden'
            }}>
            <ResponsiveAppBar/>
            <Header/>

            <Container>
                <Grid container="container" spacing={2}>
                    <Grid
                        item="item"
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        style={{
                            display: 'flex',
                            alignItems: 'left',
                            justifyContent: 'left',
                            marginTop: '5%',
                            lineHeight: '2',
                            fontSize: '25px',
                            fontFamily: 'Roboto',
                            fontWeight: 'bold',
                            fontStyle: 'italic'
                        }}>
                        {
                            passengerData && (
                                <div>
                                    <p>Passenger ID: {passengerData.userID}</p>
                                    <p>Passenger Name: {passengerData.name}</p>
                                    <p>Passenger Name: {passengerData.email}</p>
                                    <p>Passenger Name: {passengerData.contactNo}</p>
                                </div>
                            )
                        }
                    </Grid>

                    <Grid
                        item="item"
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '5%',
                            lineHeight: '2',
                            fontSize: '5rem',
                            fontFamily: 'Roboto',
                            fontWeight: 'bold',
                            fontStyle: 'italic'
                        }}>
                        {
                            passengerData && (
                                <div>
                                    <p>Balance: {passengerData.balance}Rs</p>
                                </div>
                            )
                        }
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid container="container" spacing={2}>
                    <Grid
                        item="item"
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        style={{
                            // display: 'flex',
                            // alignItems: 'left',
                            // justifyContent: 'left',
                            marginTop: '5%',
                            marginBottom: '5%',
                            // lineHeight: '2',
                            // fontSize: '15px',
                            // fontFamily: 'Roboto',
                            // fontWeight: 'bold',
                            // fontStyle: 'italic'
                        }}>
                            <Typography variant="h5" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Online Payment History</Typography>
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                                <thead>
                                    <tr>
                                        <th style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold', padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Payment ID</th>
                                        <th style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold', padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Amount</th>
                                        <th style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold', padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Date</th>
                                        <th style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold', padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Type</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {onlinePaymentData.map((payment) => (
                                        <tr key={payment.id} style={{ borderBottom: '1px solid #ddd' }}>
                                            <td style={{ padding: '10px', textAlign: 'left' }}>{payment.paymentID}</td>
                                            <td style={{ padding: '10px', textAlign: 'left' }}>{payment.amount}</td>
                                            <td style={{ padding: '10px', textAlign: 'left' }}>{payment.date}</td>
                                            <td style={{ padding: '10px', textAlign: 'left' }}>{payment.type}</td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Grid>

                    <Grid
                        item="item"
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        style={{
                            // display: 'flex',
                            // alignItems: 'right',
                            // justifyContent: 'right',
                            marginTop: '5%',
                            marginBottom: '5%',
                            // lineHeight: '2',
                            // fontSize: '25px',
                            // fontFamily: 'Roboto',
                            // fontWeight: 'bold',
                            // fontStyle: 'italic'
                        }}>
                            <Typography variant="h5" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Local Payment History</Typography>
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                                <thead>
                                    <tr>
                                        <th style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold', padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Payment ID</th>
                                        <th style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold', padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Branch</th>
                                        <th style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold', padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Ref Number</th>
                                        <th style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold', padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Amount</th>
                                        <th style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold', padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Date</th>
                                        <th style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold', padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Type</th>

                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {localPaymentData.map((payment) => (
                                        <tr key={payment.id} style={{ borderBottom: '1px solid #ddd' }}>
                                            <td style={{ padding: '10px', textAlign: 'left' }}>{payment.paymentID}</td>
                                            <td style={{ padding: '10px', textAlign: 'left' }}>{payment.branch}</td>
                                            <td style={{ padding: '10px', textAlign: 'left' }}>{payment.refNumber}</td>
                                            <td style={{ padding: '10px', textAlign: 'left' }}>{payment.amount}</td>
                                            <td style={{ padding: '10px', textAlign: 'left' }}>{payment.date}</td>
                                            <td style={{ padding: '10px', textAlign: 'left' }}>{payment.type}</td>

                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Grid>
                </Grid>
            </Container>

        </div>
    )
}

export default UserDash