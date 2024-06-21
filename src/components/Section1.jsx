import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import bg from '../assets/img/bg.png'

const Section1 = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/e31436d2e4715e019c653fad/pexelsphoto3761118.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        // height:"800px",
        objectFit: "cover",
        // height:"200px"
      }}
    >
      <Box sx={{ maxWidth: "500px", height: "700px", pt: 40, pl:{xs:4,sm:15}}}>
        <Typography
          variant="h4"
          component={Box}
          sx={{ color: "white", fontWeight: "bold",fontSize:{xs:"22px" ,sm:"30px"} }}
        >
          Just the right amount of everything.
        </Typography>
        <TextField
          placeholder="Enter  a valid email Address"
          // variant='outlined'
          size="small"
          sx={{
            backgroundColor: "white",
            objectFit: "cover",
            width: "260px",
            mt: 2,
            mr: 2,
            borderRadius: "4px",
          }}
        />
        <Button
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "#ffc107",
            px: 3,
            borderRadius: "none",
            "& .hover": {
              backgroundcolor: "white",
              color: "#ffc107",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Section1;
