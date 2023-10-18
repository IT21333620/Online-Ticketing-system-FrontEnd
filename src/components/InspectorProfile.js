import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function InspectProfile() {
    const { id } = useParams();
  
    const [inspectorData, setInspectorData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const userID = id;
          try {
              const response = await fetch(
                  `http://localhost:8080/api/Inspector/byInspector/${userID}`
              );
              if (!response.ok) {
                  throw new Error('HTTP Error! status: ' + response.status);
              }
              const data = await response.json();
              setInspectorData(data[0]);
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, []);

  useEffect(() => {
    console.log('Inspector Data UE',inspectorData)
  },[inspectorData])

    

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '90vh',borderRadius:10 }} > 
            <Stack direction="row" >
              <Grid Container spacing={10}
                direction="row"
                justifyContent="center"
                alignItems="center"
                padding={10}
              >
                <Grid item xs={12} sm={6} md={4}>
                  <Avatar sx={{
                    bgcolor: 'gray',
                    width: 150,  // Set the desired width
                    height: 150, // Set the desired height
                    marginBottom: 10
                  }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAANlBMVEWVu9////+QuN6Mtt2ox+SavuDe6fTs8vn4+v30+Pu0zue50enj7PbE2OykxOP6/P3S4fDL3O6N0ijzAAADyklEQVR4nO2b6W6rMBCF8XgDGwy8/8teHIcmbVh8iIdEunx/WlVVe2LPPlBVFxcXF+dAiQ8KkFIG5bz3ToXp+w9IIQre1OJBbXw4+Uyo6mwv/tLbrjpPB8mxfpFwP5HxrIuRbkVCwslTVJhNEUKYEzSQ3REhhOW/lGZXhBANs4aMk7idBqsIOWSJEGJgNFHa9o5nHJ9tUI5RJBo2FeSzRQjh2WTkmWaCy0ABq4gwWYbcC5q/aZnc5DWLbtGzaAAvhOlKaARVjCwqWlBFy6FCYmYxGQaHeUpQhBAcKghWwSCi0rAKXV4EKViFKm+el4onAqwilBfxHdZ5wFNZYiesgiV25hediYZFBZzNWCJ4bi8yM7Bk9g5U0bEUnmjYUhwivqPurCTSjkwNCU8Nnt0qJ5gaZjCfceSyiF6bqS1Rc2SRCFSFs1TgNxVIxOCJFjcAFWwaKsrvlw3jLCd/jMI3RAGyO0tWn8k+DEbbjOQdBvPYNfMwOK3iJiMnpbEPwimnLQns43i5P9IZ
                  " />
                </Grid>
                <Grid item xs={12} sm={6} md={8} StmarginBottom={2}> 
                  <h3> Ticket Inspector</h3>
                  <br/>
                  {inspectorData && (
                      <>
                      <h4>ID: {inspectorData.inspectorID}</h4>
                      <br/>
                      <h4>Name: {inspectorData.name}</h4>
                      <br/>
                      <h4>Email: {inspectorData.email}</h4>
                      <br/>
                      <h4>Contact No: {inspectorData.contactNo}</h4>
                    </>
                  )}
                </Grid>

              </Grid>
            </Stack>
      
        </Box>
      </Container>
    </React.Fragment>
  );
}
