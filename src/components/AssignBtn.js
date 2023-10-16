import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';

export default function AssignBtn() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" color="success" sx={{ width: '110%', height: '40px', marginLeft: 'auto'}} >Assign</Button>
    </Stack>
  );
}