import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, Stack, Typography } from '@mui/material';

const Section6 = () => {
  return (
    <Box
      sx={{
        bgcolor: "#ee1b24",
        width: "100%",
        // height: "200px",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 5  ,pb:2}}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "45px", fontWeight: "bold" }}
          >
            Follow Us!
          </Typography>
          <List
            sx={{
              display: "flex",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItem sx={{    fontSize: "30px", color: "white" }}>
             
              <i className="fa-brands fa-facebook-f "></i>
              
            </ListItem>
            <ListItem sx={{    fontSize: "30px", color: "white" }}>
             
              <i className="fa-brands fa-twitter"></i>
              
            </ListItem>
            <ListItem sx={{    fontSize: "30px", color: "white" }}>
             
              <i className="fa-brands fa-instagram"></i>
              
            </ListItem>
            <ListItem sx={{    fontSize: "30px", color: "white" }}>
             
              <i className="fa-brands fa-linkedin-in"></i>
              
            </ListItem>
            <ListItem sx={{    fontSize: "30px", color: "white" }}>
             
                <i className="fa-brands fa-pinterest-p"></i>
              
            </ListItem>
          </List>
        </Stack>
      </Box>
    </Box>
  );
}

export default Section6;
