import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';

const PassengerLogin = () => {
    const navigate = useNavigate();
    const { setUserID } = useUser();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const userID = document.getElementById('outlined-ID').value;
        const password = document.getElementById('outlined-password').value;

        try{
            const response = await axios.get(`http://localhost:8080/api/tickets/checkPassenger/${userID}/${password}`);
            console.log('Response:', response);

            if(response.data === true){
                localStorage.setItem('userID', userID);
                Swal.fire({
                    title: 'Login Success!',
                    icon: 'success',
                });
                navigate(`/passengerDashboard`);
            }
            else{
                Swal.fire({
                    title: 'Login Failed!',
                    icon: 'error',
                });
                document.getElementById('outlined-ID').value = '';
                document.getElementById('outlined-password').value = '';
            }

        }
        catch(error){
            console.log(error);
            document.getElementById('outlined-ID').value = '';
            document.getElementById('outlined-password').value = '';
        }
    };
    

    return (
        <div>
            <Container>
                <Grid container="container" spacing={2}>
                    <Grid
                        item="item"
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2em'
                        }}>
                        <h1>Passenger Login</h1>
                    </Grid>
                </Grid>
            </Container>

            <form
                style={{
                    border: '2px solid #000',
                    margin: '3% 12% 3% 12%',
                    borderRadius: '10%',
                    padding: '2em'
                }}
                onSubmit={handleSubmit}>
                <Container>
                    <Grid container="container" spacing={2}>
                        <Grid
                            item="item"
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            xl={12}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '2em'
                            }}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root' : {
                                            m: 1,
                                            width: '100%'
                                        }
                                    }}
                                    noValidate="noValidate"
                                    autoComplete="off">
                                    <Typography variant="h6" component="div" gutterBottom="gutterBottom">Passenger ID</Typography>
                                    <TextField
                                        required="Passenger ID"
                                        id="outlined-ID"
                                        label="ID"
                                        defaultValue=" "/>
                                </Box>
                        </Grid>

                        <Grid
                            item="item"
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            xl={12}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '2em'
                            }}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root' : {
                                            m: 1,
                                            width: '100%'
                                        }
                                    }}
                                    noValidate="noValidate"
                                    autoComplete="off">
                                    <Typography variant="h6" component="div" gutterBottom="gutterBottom">Password</Typography>
                                    <TextField
                                        required="Password"
                                        id="outlined-password"
                                        label="Password"
                                        defaultValue=" "/>
                                </Box>
                        </Grid>

                        <Grid item="item" xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex',alignItems: 'center',justifyContent: 'center',padding: '2em'}}>
                        <Button type="submit" variant="contained" style={{backgroundColor: '#04E057', color: 'white', fontSize: '20px'}}>Login</Button>
                        </Grid>
                    </Grid>
                </Container>
            </form>
        </div>
    )
}

export default PassengerLogin