import {useState,useRef,useEffect} from 'react'
import PassengerHeader from '../components/PassengerHeader'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import {Container, Grid,Typography, Button} from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Swal from 'sweetalert2'
import axios from 'axios';

const PassengerOnlinePayment = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;
    const day = `${currentDate.getDate().toString().padStart(2, '0')}`;
    const formattedCurrentDate = `${year}-${month}-${day}`;
    const [type, setType] = useState('Credit Card');
    const [cvc, setCVC] = useState('');
    const handleCVCChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        const limitedValue = value.slice(0, 3);
        setCVC(limitedValue);
    };

    const [cardNumber, setCardNumber] = useState('');

    const handleCardNumberChange = (event) => {
        let value = event.target.value;
        // Remove any non-numeric characters
        value = value.replace(/\D/g, '');
        // Ensure it doesn't exceed 11 digits
        value = value.slice(0, 11);
        setCardNumber(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Get values from input fields
        const userID = document.getElementById('outlined-ID').value;
        const amount = document.getElementById('outlined-Amount').value;
        const date = document.getElementById('outlined-Date').value;
        const nameOnCard = document.getElementById('outlined-NameonCard').value;
        const cardNumber = document.getElementById('outlined-CardNumber').value;
        const cvc = document.getElementById('outlined-CVC').value;

    
        // Check if any of the fields are empty
        if (!userID || !amount || !date || !nameOnCard || !cardNumber || !cvc) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill out all fields.',
                icon: 'error',
            });
            return;
        }
    
        const formData = {
            userID,
            amount,
            date,
            type,
        };
    
        try {
            const response = await axios.post('http://localhost:8080/api/tickets/saveOnlinePayment', formData);
            console.log('Response:', response);

            document.getElementById('outlined-ID').value = '';
            document.getElementById('outlined-Amount').value = '';
            document.getElementById('outlined-Date').value = '';
            document.getElementById('outlined-NameonCard').value = '';
            document.getElementById('outlined-CardNumber').value = '';
            document.getElementById('outlined-EpirationDate').value = '';
            document.getElementById('outlined-CVC').value = '';

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
            console.log(error);
        }
    };


    return (
        <div style={{overflowX: 'hidden'}}>
            <ResponsiveAppBar/>
            <PassengerHeader/>

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
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '5%',
                            fontSize: '2rem'
                        }}>
                        <h1>Recharge Online</h1>
                    </Grid>
                </Grid>
            </Container>

            <Divider style={{
                    padding: '2em'
                }}/>

            <form style={{border: '2px solid #000' ,margin: '3% 12% 3% 12%', borderRadius: '10%', padding: '2em'}} onSubmit={handleSubmit}>
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
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <h4 style={{padding: '2em', fontSize: '20px'}}>Enter Payment Details</h4>
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
                            justifyContent: 'center'
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
                                id="outlined-ID"
                                label="ID"
                                defaultValue=" "/>
                        </Box>
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
                            justifyContent: 'center'
                        }}>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Payment Method</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={type}
                                onChange={(e) => setType(e.target.value)} 
                            >
                                <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
                                <FormControlLabel value="Debit Card" control={<Radio />} label="Debit Card" />
                            </RadioGroup>
                        </FormControl>
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
                            justifyContent: 'center'
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
                            <Typography variant="h6" component="div" gutterBottom="gutterBottom">Amount</Typography>
                            <TextField
                                id="outlined-Amount"
                                label="Amount"
                                type='Number'
                                inputProps={{ min: "0", step: "1" }}
                                defaultValue=" "/>
                        </Box>
                    </Grid>

                    <Grid
                        item="item"
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                        xl={3}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
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
                            <Typography variant="h6" component="div" gutterBottom="gutterBottom">Name on Card</Typography>
                            <TextField
                                id="outlined-NameonCard"
                                label="Name on Card"
                                defaultValue=" "/>
                        </Box>
                    </Grid>

                    <Grid
                        item="item"
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                        xl={3}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
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
                            <Typography variant="h6" component="div" gutterBottom="gutterBottom">Card Number</Typography>
                            <TextField
                                id="outlined-CardNumber"
                                label="Card Number"
                                type="text"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                            />
                        </Box>
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
                            justifyContent: 'center'
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
                            <Typography variant="h6" component="div" gutterBottom="gutterBottom">Date</Typography>
                            <TextField
                                id="outlined-Date"
                                type='Date'
                                inputProps={{
                                    min: formattedCurrentDate,
                                }}/>
                        </Box>
                    </Grid>

                    <Grid
                        item="item"
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                        xl={3}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
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
                            <Typography variant="h6" component="div" gutterBottom="gutterBottom">Expiration Date</Typography>
                            <TextField
                                id="outlined-EpirationDate"
                                type='month'
                                defaultValue=" "/>
                        </Box>
                    </Grid>

                    <Grid
                        item="item"
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                        xl={3}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
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
                            <Typography variant="h6" component="div" gutterBottom="gutterBottom">CVC</Typography>
                            <TextField
                                required
                                id="outlined-CVC"
                                label="CVC"
                                value={cvc}
                                onChange={handleCVCChange}
                            />
                        </Box>
                    </Grid>

                    <Grid item="item" xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex',alignItems: 'center',justifyContent: 'center',padding: '2em'}}>
                        <Button type='submit' variant="contained" style={{backgroundColor: '#04E057', color: 'white', fontSize: '20px'}}>Submit</Button>
                    </Grid>

                </Grid>
            </Container>
            </form>
        </div>
    )
}

export default PassengerOnlinePayment