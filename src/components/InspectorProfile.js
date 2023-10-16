import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import React from 'react';



export default function InspectProfile() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} > 
            <Stack direction="row" spacing={2}>
                <Avatar sx={{
                                bgcolor: 'gray',
                                width: 150,  // Set the desired width
                                height: 150, // Set the desired height
                            }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAANlBMVEWVu9////+QuN6Mtt2ox+SavuDe6fTs8vn4+v30+Pu0zue50enj7PbE2OykxOP6/P3S4fDL3O6N0ijzAAADyklEQVR4nO2b6W6rMBCF8XgDGwy8/8teHIcmbVh8iIdEunx/WlVVe2LPPlBVFxcXF+dAiQ8KkFIG5bz3ToXp+w9IIQre1OJBbXw4+Uyo6mwv/tLbrjpPB8mxfpFwP5HxrIuRbkVCwslTVJhNEUKYEzSQ3REhhOW/lGZXhBANs4aMk7idBqsIOWSJEGJgNFHa9o5nHJ9tUI5RJBo2FeSzRQjh2WTkmWaCy0ABq4gwWYbcC5q/aZnc5DWLbtGzaAAvhOlKaARVjCwqWlBFy6FCYmYxGQaHeUpQhBAcKghWwSCi0rAKXV4EKViFKm+el4onAqwilBfxHdZ5wFNZYiesgiV25hediYZFBZzNWCJ4bi8yM7Bk9g5U0bEUnmjYUhwivqPurCTSjkwNCU8Nnt0qJ5gaZjCfceSyiF6bqS1Rc2SRCFSFs1TgNxVIxOCJFjcAFWwaKsrvlw3jLCd/jMI3RAGyO0tWn8k+DEbbjOQdBvPYNfMwOK3iJiMnpbEPwimnLQns43i5P9IZT9iQ7I76zDlrmm3T4N0HPNgch/MNwF9krF8KY/54+v/3L2s5fo6ZnFpIunsFJdWScVh1N0zt2BaasvL1VMjRrONv5dXOGmgqDWtfMbgKURhuZWc9hyQi7Y1tYpPSN9Z4Pe+3KaRfHApvvKe/Nv588v6xtiVZaRXR1eMGpPvpntqxKiZE6u63EQwbl05/mmrb6RI3Q+rVLRu/8hGJ/GssMW93JqSXq3+rFnQQLXrOdDP6LR1yvZywY5DyRwqRlGFcD+3+jWvZyZ+16ZwKQYegXGe2G7fjeTZrO9TXdZ0zUji8OdLoRmRT7cG+FR6nbXNw2IYPvrc5NGEqfBQHDwOfe+9xwDLgxeU+R1ab2CwthwMVKb4O2QdemMCT3hzgHrq4h0RwL0H3EDnArXzpkJUAAxf0CE4+4EQBXobkAa5MwMl7LuCEHl/V5YGpKJ9EElAqgZ/ByQWquBhSWQJKaEwugjoJj4ugaZUjfkegGM7lIpiTcBQXCaDEYHNUyFVZSpwEUOiAm1MEYMsKPsmJAAyGWcq9BFD0ZT57fgRkacGoIl+E5gqdU/DMD1uXim9T8R0+8h0R/Esqvjh3LjngS/T4LFpWvvCM79jGhCR5U8ZbGuPp+PaISKvBIg8FvVLbQel31yQkpXYbc/Zt7Oh0qbc148Rf+6FFrqdpB6+ftgaFmP6enk6lTauydfrGttMJ6HLLqgUpknRwfjQL1lJbM3oXNBU/gRUt8T3dqEe527u6TsX/HX/0kZeHiT7+4vLFxcX/xT//zSrVFB7U4gAAAABJRU5ErkJggg=="/>
                
                Inspector ID: 
                Name:
                Email:

            </Stack>
      
        </Box>
      </Container>
    </React.Fragment>
  );
}
