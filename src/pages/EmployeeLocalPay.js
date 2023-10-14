import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import EmployeeHeader from '../components/EmployeeHeader'
import {Button, Container, Grid, Typography} from '@mui/material'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

            <Divider style={{
                    marginBottom: '5%'
                }}/>

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
                                id="outlined-number"
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
                        <Button variant="contained" style={{backgroundColor: '#04E057', color: 'white', fontSize: '25px'}}>Submit</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default EmployeeLocalPay