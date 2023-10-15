import { Button, Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React from 'react';
import EmployeeHeader from '../components/EmployeeHeader';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import axios from 'axios';
import Swal from 'sweetalert2';

const EmployeeLocalPay = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;
    const day = `${currentDate.getDate().toString().padStart(2, '0')}`;
    const formattedCurrentDate = `${year}-${month}-${day}`;

    const [paymentType, setpaymentType] = React.useState('');
    const handleChange = (event) => {
        setpaymentType(event.target.value);
      };
    
    

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
            userID: document.getElementById('outlined-ID').value,
            branch: document.getElementById('outlined-Branch Name').value,
            refNumber: document.getElementById('outlined-Referance Number').value,
            amount: document.getElementById('outlined-Amount').value,
            date: document.getElementById('outlined-Date').value,
            type: paymentType
        }
    
        if (!formData.userID || !formData.branch || !formData.refNumber || !formData.amount || !formData.date || !paymentType) {
            // Display an error message or alert to the user
            Swal.fire({
                title: 'Error',
                text: 'Please fill in all fields',
                icon: 'error',
            });
            return; // Exit the function without making the API request
        } else {
            try {
                const response = await axios.post('http://localhost:8080/api/tickets/saveLocalPayment', formData);
                console.log('Response:', response);
    
                document.getElementById('outlined-ID').value = '';
                document.getElementById('outlined-Branch Name').value = '';
                document.getElementById('outlined-Referance Number').value = 'REFXXX';
                document.getElementById('outlined-Amount').value = '';
                document.getElementById('outlined-Date').value = formattedCurrentDate;
                setpaymentType('');
    
                const amount = formData.amount;
                const userID = formData.userID;
    
                const balanceUpdateResponse = await axios.put(`http://localhost:8080/api/tickets/updateBalance/${amount}/${userID}`);
                console.log('Balance Updated', balanceUpdateResponse);
    
                Swal.fire({
                    title: 'Payment Success!',
                    text: 'Balance updated successfully.',
                    icon: 'success',
                });
            } catch (error) {
                console.log('Error:', error);
            }
        }
    }

    return (
        <div style={{overflowX: 'hidden'}}>
            <ResponsiveAppBar/>
            <EmployeeHeader/>

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
                            marginTop: '5%',
                            textAlign: 'center',
                            padding: '1em',
                            fontSize: '1.5em'
                        }}>
                        <h1>Make customers payment</h1>
                    </Grid>
                </Grid>
            </Container>

            <Divider/>

            <form style={{border: '2px solid #000' ,margin: '3% 12% 3% 12%', borderRadius: '10%', padding: '2em'}} onSubmit={handleSubmit}>
            <Container>
                <Grid container="container" spacing={2}>
                    <Grid item="item" xs={12} sm={12} md={6} lg={6} xl={6} style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
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
                    <Grid item="item" xs={12} sm={12} md={6} lg={6} xl={6} style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
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
                            <Typography variant="h6" component="div" gutterBottom="gutterBottom">Branch Name</Typography>
                            <TextField
                                required="Branch Name"
                                id="outlined-Branch Name"
                                label="Branch Name"
                                defaultValue=" "/>
                        </Box>
                    </Grid>

                    <Grid item="item" xs={12} sm={12} md={6} lg={6} xl={6} style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
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
                            <Typography variant="h6" component="div" gutterBottom="gutterBottom">Reference Number</Typography>
                            <TextField
                                required="Referance Number"
                                id="outlined-Referance Number"
                                label="Referance Number"
                                defaultValue="REFXXX"/>
                        </Box>
                    </Grid>

                    <Grid item="item" xs={12} sm={12} md={6} lg={6} xl={6} style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
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
                            <Typography variant="h6" component="div" gutterBottom="gutterBottom">Amount</Typography>
                            <TextField
                                id="outlined-Amount"
                                label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    min: 0,
                                }}
                                />
                        </Box>
                    </Grid>

                    <Grid item="item" xs={12} sm={12} md={6} lg={6} xl={6} style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
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
                            <Typography variant="h6" component="div" gutterBottom="gutterBottom">Date</Typography>
                            <TextField
                                id="outlined-Date"
                                label="Date"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    min: formattedCurrentDate,
                                }}
                                />
                        </Box>
                    </Grid>

                    <Grid item="item" xs={12} sm={12} md={6} lg={6} xl={6} style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
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
                            <Typography variant="h6" component="div" gutterBottom="gutterBottom">Payment Type</Typography>
                            <Select
                                labelId="paymentType"
                                id="paymentType"
                                value={paymentType}
                                label="Payment Type"
                                onChange={handleChange}
                                style={{width: '100%'}}
                                required="Payment Type"
                                >
                                <MenuItem value={'Cash'}>Cash</MenuItem>
                                <MenuItem value={'Credit Card'}>Credit Card</MenuItem>
                                <MenuItem value={'Debit Card'}>Debit Card</MenuItem>
                            </Select>
                        </Box>
                    </Grid>

                    <Grid item="item" xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex',alignItems: 'center',justifyContent: 'center',padding: '2em'}}>
                        <Button type="submit" variant="contained" style={{backgroundColor: '#04E057', color: 'white', fontSize: '20px'}}>Submit</Button>
                    </Grid>
                </Grid>
            </Container>
            </form>
        </div>
    )
}

export default EmployeeLocalPay